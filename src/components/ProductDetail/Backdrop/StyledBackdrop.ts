import styled from "styled-components";

type Props = {
  theme: Object;
};

const StyledBackdrop = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.grey};
  zindex: 10;
`;

export default StyledBackdrop;
