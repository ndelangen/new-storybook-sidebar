import styled from "@emotion/styled";
import { Icon, styles } from "@storybook/design-system";
import React, { useState, FunctionComponent } from "react";
import { createPortal } from "react-dom";

import buttonResetStyles from "./buttonResetStyles";

const { color, typography } = styles;

const Container = styled.div({
  position: "relative"
});

const Button = styled.button({
  ...buttonResetStyles,
  display: "flex",
  width: 28,
  height: 28,
  padding: 6,
  border: `1px solid ${color.medium}`,
  borderRadius: 14,
  color: color.dark,
  transition: "all 150ms",
  "&:hover": {
    borderColor: color.mediumdark
  },
  "&:focus": {
    color: color.secondary,
    borderColor: color.secondary,
    backgroundColor: `${color.secondary}11`
  }
});

const Modal = styled.div<{ isExpanded: boolean }>((props) => ({
  position: "absolute",
  width: 200,
  top: 60,
  left: props.isExpanded ? 164 : -10000,
  zIndex: 2147483647,
  background: "rgba(255,255,255,0.95)",
  borderRadius: 5,
  fontSize: `${typography.size.s1}px`,
  filter:
    "drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))",

  "&::before": {
    content: "''",
    position: "absolute",
    borderStyle: "solid",
    marginLeft: -8,
    bottom: "auto",
    top: -8,
    right: "auto",
    left: "50%",
    borderBottomWidth: 8,
    borderTopWidth: 0,
    borderRightWidth: 8,
    borderLeftWidth: 8,
    borderTopColor: "transparent",
    borderBottomColor: "rgba(255,255,255,0.95)",
    borderLeftColor: "transparent",
    borderRightColor: "transparent"
  }
}));

const Item = styled.button({
  ...buttonResetStyles,
  padding: 10,
  transition: "all 150ms",
  "&:hover": {
    background: "rgba(0,0,0,.05)"
  },
  "&:first-of-type": {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  "&:last-of-type": {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  }
});

const Key = styled.span({
  float: "right",
  padding: "1px 3px",
  minWidth: 15,
  lineHeight: "14px",
  background: "rgba(0,0,0,0.1)",
  borderRadius: 2,
  color: color.mediumdark,
  textAlign: "center",
  fontSize: 11,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
});

const Divider = styled.div({
  height: 3,
  background: "rgba(0,0,0,.05)"
});

const Menu: FunctionComponent = () => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <Container>
      <Button onClick={() => setExpanded((value) => !value)}>
        <Icon icon="ellipsis" />
      </Button>
      {createPortal(
        <Modal isExpanded={isExpanded}>
          <Item>About your Storybook</Item>
          <Item>Release notes</Item>
          <Item>Keyboard shortcuts</Item>
          <Divider />
          <Item>
            Toggle sidebar
            <Key>S</Key>
          </Item>
          <Item>
            Toggle addons
            <Key>A</Key>
          </Item>
          <Item>
            Toggle addons orientation
            <Key>D</Key>
          </Item>
          <Item>
            Toggle full screen
            <Key>F</Key>
          </Item>
          <Item>
            Search
            <Key>/</Key>
          </Item>
          <Item>
            Previous component
            <Key>⌥ ↑</Key>
          </Item>
          <Item>
            Next component
            <Key>⌥ ↓</Key>
          </Item>
          <Item>
            Previous story
            <Key>⌥ ←</Key>
          </Item>
          <Item>
            Next story
            <Key>⌥ →</Key>
          </Item>
        </Modal>,
        document.getElementById("root") || document.body
      )}
    </Container>
  );
};

export default Menu;
