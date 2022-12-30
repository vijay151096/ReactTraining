import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop/Backdrop";
import ProductDetail from "./ProductDetail/ProductDetail";

const backdropElement = document.getElementById("backdrop");
const overlayElement = document.getElementById("overlay");

function ProductDetailModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <ProductDetail handleClick={props.handleClick} item={props.item} />,
        overlayElement
      )}
      {ReactDOM.createPortal(
        <Backdrop handleClick={props.handleClick} />,
        backdropElement
      )}
    </>
  );
}

export default ProductDetailModal;
