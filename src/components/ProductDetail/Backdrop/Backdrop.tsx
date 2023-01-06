import StyledBackdrop from "./StyledBackdrop";

type BackDropProps = {
  handleClick: () => void;
  theme: Object;
};

const Backdrop: React.FC<BackDropProps> = (props) => {
  return <StyledBackdrop theme={props.theme} onClick={props.handleClick} />;
};

export default Backdrop;
