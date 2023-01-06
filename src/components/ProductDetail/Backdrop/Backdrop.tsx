import StyledBackdrop from "./StyledBackdrop";

type BackDropProps = {
  handleClick: () => void
}

const Backdrop = (props: BackDropProps) => {
  
  return <StyledBackdrop onClick={props.handleClick} />;
};

export default Backdrop;
