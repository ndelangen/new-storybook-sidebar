import styled from "@emotion/styled";
import { Subheading, styles } from "@storybook/design-system";

const GroupHeading = styled(Subheading)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "15px 23px 5px 23px",
  minHeight: 21,
  lineHeight: "15px",
  fontSize: `${styles.typography.size.s1 - 1}px`,
  color: styles.color.mediumdark
});

export default GroupHeading;
