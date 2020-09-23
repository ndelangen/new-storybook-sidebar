import styled from "@emotion/styled";
import { Icon, styles } from "@storybook/design-system";
import throttle from "lodash.throttle";
import React, {
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  KeyboardEvent
} from "react";

import {
  ComponentNode,
  DocumentNode,
  FolderNode,
  RootNode,
  StoryNode
} from "./TreeNode";
import buttonResetStyles from "./buttonResetStyles";
import { Item } from "./types";

const { color } = styles;

const getAncestorIds = (data, id) => {
  if (!data[id]) return [];
  const { parent } = data[id];
  return parent ? [...getAncestorIds(data, parent), parent] : [];
};

const getDescendantIds = (data, id) => {
  if (!data[id]) return [];
  const { children, isComponent } = data[id];
  if (isComponent || !children || !children.length) return [];
  const descendantIds = children.map((id) => getDescendantIds(data, id)).flat();
  return children.concat(descendantIds);
};

const cycleArray = (array, index, delta) => {
  let next = index + (delta % array.length);
  if (next < 0) next = array.length + next;
  if (next >= array.length) next = next - array.length;
  return array[next];
};

const ToggleAll = styled.button({
  ...buttonResetStyles,
  display: "flex",
  justifyContent: "center",
  width: 21,
  height: 21,
  color: color.dark,
  border: `1px solid transparent`,
  borderRadius: "100%",
  "&:hover": {
    color: color.darker
  },
  "&:focus": {
    color: color.secondary,
    background: `${color.secondary}22`,
    borderColor: color.secondary
  },
  svg: {
    width: 11,
    height: 11
  }
});

const Node = React.memo<{
  node: Item;
  isRooted: boolean;
  isExpanded: boolean;
  isAllExpanded: boolean;
  setExpanded: (i: { id: Item["id"]; value: boolean; all?: boolean }) => void;
  isHighlighted: boolean;
  isDisplayed: boolean;
  onSelectStory: (id: string) => void;
}>(
  ({
    node,
    isRooted,
    isExpanded,
    isAllExpanded,
    setExpanded,
    isHighlighted,
    isDisplayed,
    onSelectStory
  }) => {
    if (!isDisplayed) return null;
    if (node.isLeaf) {
      const LeafNode = node.isComponent ? DocumentNode : StoryNode;
      return (
        <LeafNode
          key={node.id}
          data-id={node.id}
          data-parent={node.parent}
          data-highlightable={isDisplayed}
          depth={isRooted ? node.depth - 1 : node.depth}
          isHighlighted={isHighlighted}
          onClick={() => onSelectStory(node.id)}
        >
          {node.name}
        </LeafNode>
      );
    }
    if (node.isRoot) {
      return (
        <RootNode key={node.id} data-id={node.id}>
          {node.name}
          <ToggleAll
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setExpanded({ id: node.id, value: !isAllExpanded, all: true });
            }}
          >
            <Icon icon={isAllExpanded ? "collapse" : "expandalt"} />
          </ToggleAll>
        </RootNode>
      );
    }
    const BranchNode = node.isComponent ? ComponentNode : FolderNode;
    return (
      <BranchNode
        key={node.id}
        data-id={node.id}
        data-parent={node.parent}
        data-highlightable={isDisplayed}
        aria-controls={`collapsible__${node.id}`}
        aria-expanded={isExpanded}
        depth={isRooted ? node.depth - 1 : node.depth}
        isComponent={node.isComponent}
        isExpandable={node.children && node.children.length > 0}
        isExpanded={isExpanded}
        isHighlighted={isHighlighted}
        onClick={() => setExpanded({ id: node.id, value: !isExpanded })}
      >
        {node.name}
      </BranchNode>
    );
  }
);

const Root = styled.div<{ hasOrphans: boolean }>((props) => ({
  marginTop: props.hasOrphans ? 20 : 0,
  marginBottom: 20
}));

const Tree = React.memo<{
  data: Record<string, Item>;
  onSelectStory: (id: string) => void;
}>(({ data, onSelectStory }) => {
  const nodeIds = useMemo(() => Object.keys(data), [data]);
  const [roots, orphans] = useMemo(
    () =>
      nodeIds.reduce<[string[], string[]]>(
        (acc, id) => {
          const node = data[id];
          if (node.isRoot) acc[0].push(id);
          else if (!node.parent) acc[1].push(id);
          return acc;
        },
        [[], []]
      ),
    [data, nodeIds]
  );
  const orphansFirst = useMemo(
    () =>
      nodeIds
        .reduce<[string[], string[]]>(
          (acc, id) => {
            if (orphans.some((oid) => id === oid || id.startsWith(`${oid}-`)))
              acc[0].push(id);
            else acc[1].push(id);
            return acc;
          },
          [[], []]
        )
        .flat(),
    [nodeIds, orphans]
  );

  const [highlighted, setHighlighted] = useState<string>();

  const [expanded, setExpanded] = useReducer<
    React.Reducer<
      Record<string, boolean>,
      { id: string; value: boolean; all?: boolean }
    >
  >(
    (state, { id, value, all = false }) =>
      all
        ? getDescendantIds(data, id).reduce(
            (acc, id) => Object.assign(acc, { [id]: value }),
            { ...state }
          )
        : { ...state, [id]: value },
    roots.reduce<Record<string, boolean>>(
      (acc, id) => Object.assign(acc, { [id]: true }),
      {}
    )
  );

  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const getElementByDataId = (id: string) =>
      rootRef.current && rootRef.current.querySelector(`[data-id=${id}]`);

    const highlightElement = (element) => {
      setHighlighted(element.getAttribute("data-id"));
      const { top, bottom } = element.getBoundingClientRect();
      const inView =
        top >= 0 &&
        bottom <= (window.innerHeight || document.documentElement.clientHeight);
      if (!inView) element.scrollIntoView({ block: "nearest" });
    };

    const navigateTree = throttle((event: KeyboardEvent) => {
      if (!rootRef || !rootRef.current) return;

      switch (event.key) {
        case "ArrowUp":
        case "ArrowDown": {
          event.preventDefault();
          const focusable = Array.from(
            rootRef.current.querySelectorAll("[data-highlightable=true]")
          );
          const focusedIndex = focusable.findIndex(
            (el) => el.getAttribute("data-id") === highlighted
          );
          highlightElement(
            cycleArray(
              focusable,
              focusedIndex,
              event.key === "ArrowUp" ? -1 : 1
            )
          );
          break;
        }

        case "ArrowLeft": {
          event.preventDefault();
          if (!highlighted) break;
          const highlightedElement = getElementByDataId(highlighted);
          if (!highlightedElement) break;
          const expanded = highlightedElement.getAttribute("aria-expanded");
          if (expanded === "true") {
            setExpanded({ id: highlighted, value: false });
          } else {
            const parentId = highlightedElement.getAttribute("data-parent");
            if (!parentId) break;
            const parentElement = getElementByDataId(parentId);
            if (
              parentElement &&
              parentElement.getAttribute("data-highlightable") === "true"
            ) {
              setExpanded({ id: parentId, value: false });
              highlightElement(parentElement);
            } else {
              setExpanded({ id: parentId, value: false, all: true });
            }
          }
          break;
        }

        case "ArrowRight": {
          event.preventDefault();
          if (!highlighted) break;
          const highlightedElement = getElementByDataId(highlighted);
          if (!highlightedElement) break;
          const expanded = highlightedElement.getAttribute("aria-expanded");
          if (expanded === "false") {
            setExpanded({ id: highlighted, value: true });
          } else if (expanded === "true") {
            setExpanded({ id: highlighted, value: true, all: true });
          }
        }
      }
    }, 16);

    document.addEventListener("keydown", navigateTree);
    return () => document.removeEventListener("keydown", navigateTree);
  }, [highlighted, setHighlighted]);

  return (
    <Root ref={rootRef} hasOrphans={orphans.length > 0}>
      {orphansFirst.map((id) => {
        const node = data[id];
        return (
          <Node
            key={id}
            node={node}
            isRooted={!orphans.includes(id)}
            isExpanded={!!expanded[id]}
            isAllExpanded={
              node.isRoot &&
              getDescendantIds(data, node.id).every((id) => expanded[id])
            }
            setExpanded={setExpanded}
            isHighlighted={highlighted === id}
            isDisplayed={
              !node.parent ||
              getAncestorIds(data, node.id).every((id) => expanded[id])
            }
            onSelectStory={onSelectStory}
          />
        );
      })}
    </Root>
  );
});

export default Tree;
