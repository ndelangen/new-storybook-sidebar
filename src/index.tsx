import { Global, CSSObject } from "@emotion/core";
import styled from "@emotion/styled";
import { styles } from "@storybook/design-system";
import React from "react";
import { render } from "react-dom";

import data from "./data";
import Sidebar from "./Sidebar";

const { background, typography } = styles;

const globalStyles = {
  body: {
    margin: 0,
    background: background.app,
    fontFamily: typography.type.primary
  },
  "*": {
    boxSizing: "border-box"
  }
} as CSSObject;

const Root = styled.div({
  display: "flex"
});

const Canvas = styled.div({
  background: "#fff",
  flexGrow: 1,
  height: "calc(100vh - 20px)",
  marginTop: 10,
  borderRadius: 5,
  boxShadow: "0 1px 5px 0 rgba(0,0,0,0.1)"
});

render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Root>
      <Sidebar data={data} />
      <Canvas />
    </Root>
  </React.StrictMode>,
  document.getElementById("root")
);
