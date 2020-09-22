import styled from "@emotion/styled";
import { Subheading, styles } from "@storybook/design-system";

const GroupHeading = styled(Subheading)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "15px 23px 0 23px",
  minHeight: 25,
  fontSize: `${styles.typography.size.s1}px`,
  color: styles.color.mediumdark
});

export default GroupHeading;
