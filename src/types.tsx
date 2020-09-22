import { ControllerStateAndHelpers } from "downshift";

export interface Item {
  args?: Record<string, any>;
  argTypes?: Record<string, any>;
  children?: string[];
  depth: number;
  id: string;
  initialArgs?: Record<string, any>;
  isComponent: boolean;
  isLeaf: boolean;
  isRoot: boolean;
  name: string;
  parent?: string;
  story?: string;
}

export interface Match {
  value: string;
  indices: [number, number][];
}

export function isSearchResult(x: any): x is RawSearchresults[0] {
  return !!x.item;
}
export function isExpandType(x: any): x is ExpandType {
  return !!x.totalCount;
}

export interface ExpandType {
  showAll: () => void;
  totalCount: number;
}

export type DownshiftItem = RawSearchresults[0] | ExpandType;

export type RawSearchresults = (Fuse.FuseResultWithMatches<Item> &
  Fuse.FuseResultWithScore<Item>)[];

export type SearchChildrenFn = (args: {
  inputValue: string;
  results: DownshiftItem[];
  inputHasFocus: boolean;
  getMenuProps: ControllerStateAndHelpers<DownshiftItem>["getMenuProps"];
  getItemProps: ControllerStateAndHelpers<DownshiftItem>["getItemProps"];
  highlightedIndex: number | null;
}) => React.ReactNode;
