import styled from "styled-components";

const Backdrop = (props) => {
  const StyledBackdrop = styled.div({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(128, 128, 128, 0.53)",
    zIndex: 10,
  });

  return <StyledBackdrop onClick={props.handleClick} />;
};

export default Backdrop;
