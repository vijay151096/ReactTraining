import styled from "styled-components";
const StyledBackdrop = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: (props) => props.theme.colors.grey,
  zIndex: 10,
});

export default StyledBackdrop;
