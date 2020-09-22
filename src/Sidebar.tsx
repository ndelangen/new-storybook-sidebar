import styled from "@emotion/styled";
import React, { useCallback, useState, FunctionComponent } from "react";

import Menu from "./Menu";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Tree from "./Tree";
import { Item } from "./types";

const getLastViewedStoryIds = () => {
  try {
    const raw = window.localStorage.getItem("lastViewedStoryIds");
    const v = typeof raw === "string" ? JSON.parse(raw) : [];
    return Array.isArray(v) && v.every((id) => typeof id === "string") ? v : [];
  } catch (e) {
    return [];
  }
};
const setLastViewedStoryIds = (ids: string[]) => {
  try {
    window.localStorage.setItem("lastViewedStoryIds", JSON.stringify(ids));
  } catch (e) {
    //
  }
};

const Container = styled.div({
  width: 300,
  maxHeight: "100vh",
  overflow: "auto"
});

const TopRow = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 22,
  marginBottom: 16
});

const Logo = styled.img({
  width: 110
});

const Swap = React.memo<{ condition: boolean }>(({ children, condition }) => {
  const [a, b] = React.Children.toArray(children);
  return (
    <>
      <div style={{ display: condition ? "block" : "none" }}>{a}</div>
      <div style={{ display: condition ? "none" : "block" }}>{b}</div>
    </>
  );
});

const Sidebar: FunctionComponent<{ data: Record<string, Item> }> = ({
  data
}) => {
  const getPath = useCallback<(item: Item) => string[]>(
    (item) => {
      const parent = item.parent ? data[item.parent] : null;
      return parent ? [...getPath(parent), parent.name] : [];
    },
    [data]
  );

  const [lastViewed, setLastViewed] = useState(getLastViewedStoryIds);
  const updateLastViewed = (viewedStoryId: string) =>
    setLastViewed((state) => {
      const added = [viewedStoryId, ...state];
      const index = added.lastIndexOf(viewedStoryId);
      if (index > 0) added.splice(index, 1);
      const updated = added.slice(0, 10);
      setLastViewedStoryIds(updated);
      return updated;
    });

  return (
    <Container>
      <TopRow>
        <Logo
          src="https://raw.githubusercontent.com/storybookjs/brand/master/logo/logo-storybook-default.svg?sanitize=true"
          alt="Storybook"
        />
        <Menu />
      </TopRow>
      <Search data={data} lastViewed={lastViewed} initialQuery="">
        {({
          inputValue,
          inputHasFocus,
          results,
          getMenuProps,
          getItemProps,
          highlightedIndex
        }) => (
          <Swap condition={!!(inputHasFocus || inputValue)}>
            <SearchResults
              results={results}
              getPath={getPath}
              getMenuProps={getMenuProps}
              getItemProps={getItemProps}
              highlightedIndex={highlightedIndex}
            />
            <Tree data={data} onSelectStory={updateLastViewed} />
          </Swap>
        )}
      </Search>
    </Container>
  );
};

export default Sidebar;
