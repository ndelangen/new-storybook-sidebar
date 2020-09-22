import styled from "@emotion/styled";
import { styles } from "@storybook/design-system";
import { FunctionComponent } from "react";

const { color, typography } = styles;

export const Path: FunctionComponent = styled.span({
  display: "grid",
  justifyContent: "start",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  color: color.dark,
  fontSize: `${typography.size.s1}px`,
  span: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  "span + span": {
    position: "relative",
    marginLeft: 4,
    paddingLeft: 7,
    "&:before": {
      content: "'›'",
      position: "absolute",
      left: 0
    }
  }
});

export default Path;
