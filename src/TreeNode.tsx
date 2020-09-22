import styled from "@emotion/styled";
import { Icon, styles } from "@storybook/design-system";
import React, { FunctionComponent, ComponentProps } from "react";

import GroupHeading from "./GroupHeading";
import Path from "./Path";
import buttonResetStyles from "./buttonResetStyles";

const { color, typography } = styles;

const CollapseIcon = styled(Icon)({
  width: 15,
  height: 15,
  padding: 3,
  marginTop: 2,
  marginRight: 2,
  flex: "0 0 auto",
  color: color.mediumdark
});

const TypeIcon = styled(Icon)({
  width: 15,
  height: 15,
  padding: 1,
  marginTop: 2,
  marginRight: 5,
  flex: "0 0 auto"
});

const TreeNode = styled.div<{
  depth?: number;
  isExpandable?: boolean;
  isExpanded?: boolean;
  isHighlighted?: boolean;
  isComponent?: boolean;
}>(({ depth = 0, isExpandable = false, isHighlighted = false }) => ({
  ...buttonResetStyles,
  display: "flex",
  alignItems: "start",
  padding: 3,
  paddingLeft: `${(isExpandable ? 5 : 22) + depth * 17}px`,
  fontSize: `${typography.size.s2}px`,
  background: isHighlighted ? `${color.secondary}22` : "transparent",
  "&:hover": {
    background: isHighlighted ? `${color.secondary}22` : "rgba(0, 0, 0, .05)"
  }
}));

export const RootNode = ({ children, ...props }) => (
  <GroupHeading {...props}>{children}</GroupHeading>
);

export const FolderNode: FunctionComponent<
  ComponentProps<typeof TreeNode> & { isExpanded: boolean }
> = ({ children, isExpanded, ...props }) => (
  <TreeNode {...props}>
    {props.isExpandable ? (
      <CollapseIcon icon={isExpanded ? "arrowdown" : "arrowright"} />
    ) : null}
    <TypeIcon icon="folder" color={color.orange} />
    {children}
  </TreeNode>
);

export const ComponentNode: FunctionComponent<
  ComponentProps<typeof TreeNode> & {
    isExpanded: boolean;
    isExpandable: boolean;
  }
> = ({ children, isExpanded, ...props }) => (
  <TreeNode {...props}>
    {props.isExpandable && (
      <CollapseIcon icon={isExpanded ? "arrowdown" : "arrowright"} />
    )}
    <TypeIcon icon="cpu" color={color.secondary} />
    {children}
  </TreeNode>
);

export const DocumentNode: FunctionComponent<ComponentProps<
  typeof TreeNode
>> = ({ children, ...props }) => (
  <TreeNode {...props}>
    <TypeIcon icon="document" color={color.green} />
    {children}
  </TreeNode>
);

export const StoryNode: FunctionComponent<ComponentProps<typeof TreeNode>> = ({
  children,
  ...props
}) => (
  <TreeNode {...props}>
    <TypeIcon icon="bookmarkhollow" color={color.seafoam} />
    {children}
  </TreeNode>
);

export const NodeLabel: FunctionComponent<{
  path: string[];
}> = ({ children, path, ...props }) => (
  <div {...props}>
    {children}
    {path && (
      <Path>
        {path.map((group, index) => (
          <span key={index}>{group}</span>
        ))}
      </Path>
    )}
  </div>
);
