import styled from "@emotion/styled";
import Downshift from "downshift";
import Fuse, { FuseOptions } from "fuse.js";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
  FunctionComponent
} from "react";

import { Icon, styles } from "@storybook/design-system";

import {
  Item,
  RawSearchresults,
  DownshiftItem,
  SearchChildrenFn
} from "./types";

const { color, typography } = styles;

const options = {
  shouldSort: true,
  tokenize: true,
  findAllMatches: true,
  includeScore: true,
  includeMatches: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 2,
  keys: ["name"]
} as FuseOptions<Item>;

const ScreenReaderLabel = styled.label({
  position: "absolute",
  left: -10000,
  top: "auto",
  width: 1,
  height: 1,
  overflow: "hidden"
});

const SearchIcon = styled(Icon)({
  width: 12,
  height: 12,
  position: "absolute",
  top: 8,
  left: 10,
  zIndex: 1,
  pointerEvents: "none",
  color: color.mediumdark
});

const SearchField = styled.div({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  margin: "0 12px",
  "&:focus-within svg": {
    color: color.darker
  }
});

const Input = styled.input({
  height: 28,
  paddingLeft: 28,
  paddingRight: 28,
  border: `1px solid ${color.border}`,
  background: "transparent",
  borderRadius: 28,
  fontSize: `${typography.size.s1}px`,
  fontFamily: "inherit",
  transition: "all 150ms",
  "&:focus, &:active": {
    outline: 0,
    borderColor: color.secondary,
    background: color.lightest
  },
  "&:valid ~ code, &:focus ~ code": {
    display: "none"
  },
  "&:invalid ~ svg": {
    display: "none"
  },
  "&:valid ~ svg": {
    display: "block"
  },
  "&::-ms-clear": {
    display: "none"
  },
  "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    display: "none"
  }
});

const FocusKey = styled.code({
  position: "absolute",
  top: 6,
  right: 12,
  width: 16,
  height: 16,
  zIndex: 1,
  lineHeight: "17px",
  textAlign: "center",
  fontSize: "11px",
  background: "rgba(0,0,0,0.1)",
  color: color.mediumdark,
  borderRadius: 2,
  userSelect: "none",
  pointerEvents: "none"
});

const ClearIcon = styled(Icon)({
  width: 16,
  height: 16,
  padding: 4,
  position: "absolute",
  top: 6,
  right: 12,
  zIndex: 1,
  background: "rgba(0,0,0,0.1)",
  borderRadius: 16,
  color: color.darker,
  cursor: "pointer"
});

const Search: FunctionComponent<{
  children: SearchChildrenFn;
  data: Record<string, Item>;
  lastViewed: string[];
  initialQuery: string;
}> = ({ children, data, lastViewed, initialQuery = "" }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(initialQuery);
  const [inputPlaceholder, setPlaceholder] = useState("Find components");

  useEffect(() => {
    const focusSearch = (event) => {
      if (!inputRef.current) return;
      if (event.key === "/" && inputRef.current !== document.activeElement) {
        inputRef.current.focus();
        event.preventDefault();
      }
      if (
        event.key === "Escape" &&
        inputRef.current === document.activeElement
      ) {
        inputRef.current.blur();
        setQuery("");
        event.preventDefault();
      }
    };

    // Keyup prevents slashes from ending up in the input field when held down
    document.addEventListener("keyup", focusSearch);
    return () => document.removeEventListener("keyup", focusSearch);
  }, []);

  const list: Item[] = useMemo(() => Object.values(data), [data]);
  const fuse = useMemo(() => new Fuse(list, options), [list]);

  const [allComponents, showAllComponents] = useState(false);

  const getResults = useCallback(
    (input: string) => {
      const results: DownshiftItem[] = [];
      const componentResults = (fuse.search(input) as RawSearchresults).filter(
        ({ item }) => item.isComponent
      );

      if (componentResults.length) {
        results.push(...componentResults.slice(0, allComponents ? 100 : 10));
        if (componentResults.length > 10 && !allComponents) {
          results.push({
            showAll: () => showAllComponents(true),
            totalCount: componentResults.length
          });
        }
      }

      return results;
    },
    [allComponents, fuse]
  );

  const stateReducer = (state, changes) => {
    const { blurInput, clickItem, keyDownEnter } = Downshift.stateChangeTypes;
    const { type, inputValue, selectedItem = {} } = changes;
    if (type === blurInput) return {};
    if ([clickItem, keyDownEnter].includes(type) && selectedItem.showAll) {
      selectedItem.showAll();
      return {};
    }
    if (inputValue === "") {
      showAllComponents(false);
    }
    return changes;
  };

  return (
    <Downshift<DownshiftItem>
      initialInputValue={query}
      stateReducer={stateReducer}
      itemToString={(result) => {
        // @ts-ignore
        return result?.item?.name || "";
      }}
    >
      {({
        inputValue,
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        getRootProps,
        highlightedIndex
      }) => {
        const input = inputValue ? inputValue.trim() : "";
        let results: DownshiftItem[] = input ? getResults(input) : [];

        if (!results.length && lastViewed.length) {
          results = lastViewed.map((id) => ({
            item: data[id],
            matches: [],
            score: 0
          }));
        }

        const inputProps = getInputProps({
          ref: inputRef,
          required: true,
          type: "search",
          value: query,
          placeholder: inputPlaceholder,
          onChange: (e) => setQuery(e.target.value),
          onFocus: () => setPlaceholder("Type to find..."),
          onBlur: () => setPlaceholder("Find components")
        });

        return (
          <>
            <ScreenReaderLabel {...getLabelProps()}>
              Search for components
            </ScreenReaderLabel>
            <SearchField
              {...getRootProps({ refKey: "" }, { suppressRefError: true })}
            >
              <SearchIcon icon="search" />
              <Input {...inputProps} />
              <FocusKey>/</FocusKey>
              <ClearIcon icon="cross" onClick={() => setQuery("")} />
            </SearchField>
            {children({
              inputValue: input,
              results,
              inputHasFocus: document.activeElement === inputRef.current,
              getMenuProps,
              getItemProps,
              highlightedIndex
            })}
          </>
        );
      }}
    </Downshift>
  );
};

export default Search;
