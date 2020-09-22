import styled, { CSSObject } from "@emotion/styled";
import { Icon, styles } from "@storybook/design-system";
import React, { FunctionComponent, ReactNode } from "react";
import { ControllerStateAndHelpers } from "downshift";

import GroupHeading from "./GroupHeading";
import { ComponentNode, NodeLabel, StoryNode } from "./TreeNode";
import {
  Item,
  Match,
  DownshiftItem,
  isExpandType,
  RawSearchresults
} from "./types";

const { color, typography } = styles;

const ResultsList = styled.ol({
  listStyle: "none",
  margin: 0,
  padding: 0
});

const ResultRow = styled.li<{ isHighlighted: boolean }>((props) => ({
  display: "block",
  margin: 0,
  padding: 0,
  background: props.isHighlighted ? `${color.secondary}11` : "transparent",
  cursor: "pointer"
}));

const ShowMore = styled.span({
  color: color.mediumdark,
  fontSize: `${typography.size.s1}px`
});

const Mark = styled.mark({
  background: "transparent",
  color: color.secondary
});

const Highlight: FunctionComponent<{ match?: Match }> = ({
  children,
  match
}) => {
  if (!match) {
    return <>{children}</>;
  }

  const { value, indices } = match;
  const { nodes } = indices.reduce<{ cursor: number; nodes: ReactNode[] }>(
    ({ cursor, nodes }, [start, end], index, { length }) => {
      nodes.push(<span key={`${index}-0`}>{value.slice(cursor, start)}</span>);
      nodes.push(<Mark key={`${index}-1`}>{value.slice(start, end + 1)}</Mark>);
      if (index === length - 1) {
        nodes.push(<span key={`${index}-2`}>{value.slice(end + 1)}</span>);
      }
      return { cursor: end + 1, nodes };
    },
    { cursor: 0, nodes: [] }
  );

  return <>{nodes}</>;
};

const Result: FunctionComponent<
  RawSearchresults[0] & {
    path: string;
    icon: string;
    isHighlighted: boolean;
  }
> = ({ item, matches, path, icon, ...props }) => {
  const TreeNode = item.isComponent ? ComponentNode : StoryNode;
  return (
    <ResultRow {...props}>
      <TreeNode isExpanded={false}>
        <NodeLabel path={path}>
          <strong>
            <Highlight match={matches[0]}>{item.name}</Highlight>
          </strong>
        </NodeLabel>
      </TreeNode>
    </ResultRow>
  );
};

const SearchResults: FunctionComponent<{
  results: DownshiftItem[];
  getPath: (item: Item) => string[];
  getMenuProps: ControllerStateAndHelpers<DownshiftItem>["getMenuProps"];
  getItemProps: ControllerStateAndHelpers<DownshiftItem>["getItemProps"];
  highlightedIndex: number | null;
  style: CSSObject;
}> = ({
  results,
  getPath,
  getMenuProps,
  getItemProps,
  highlightedIndex,
  style
}) => {
  let offset = 0;
  return (
    <ResultsList {...getMenuProps()} style={style}>
      {results.map((result, idx) => {
        if (typeof result === "string") {
          offset += 1;
          return (
            <li key={offset}>
              <GroupHeading>{result}</GroupHeading>
            </li>
          );
        }
        const index = idx - offset;
        if (isExpandType(result)) {
          return (
            <ResultRow
              {...result}
              {...getItemProps({ key: index, index, item: result })}
              isHighlighted={highlightedIndex === index}
              style={{ paddingLeft: 20 }}
            >
              <Icon
                icon="plus"
                color={color.mediumdark}
                style={{ height: 12, marginRight: 2 }}
              />
              <ShowMore>Show all ({result.totalCount} results)</ShowMore>
            </ResultRow>
          );
        }

        const { item } = result;
        const key = item.id;
        return (
          <Result
            {...result}
            {...getItemProps({ key, index, item: result })}
            isHighlighted={highlightedIndex === index}
            path={getPath(item)}
          />
        );
      })}
    </ResultsList>
  );
};

export default SearchResults;
