import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return <div onClick={props.handleClick} className={classes.backdrop} />;
};

export default Backdrop;
