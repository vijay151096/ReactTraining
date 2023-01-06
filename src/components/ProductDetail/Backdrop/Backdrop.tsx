import { useTheme } from "styled-components";
import StyledBackdrop from "./StyledBackdrop";

type BackDropProps = {
  handleClick: () => void;
};

const Backdrop: React.FC<BackDropProps> = (props) => {
  const theme = useTheme();
  return <StyledBackdrop theme={theme} onClick={props.handleClick} />;
};

export default Backdrop;
