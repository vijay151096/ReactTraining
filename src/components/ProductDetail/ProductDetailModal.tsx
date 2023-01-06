import React from "react";
import ReactDOM from "react-dom";
import ItemType from "../model/ItemType";
import Backdrop from "./Backdrop/Backdrop";
import ProductDetail from "./ProductDetail/ProductDetail";

const backdropElement = document.getElementById("backdrop");
const overlayElement = document.getElementById("overlay");

type ProductDetailModalProps = {
  item: ItemType;
  handleClick: () => void;
};

function ProductDetailModal(props: ProductDetailModalProps) {
  return (
    <>
      {ReactDOM.createPortal(
        <ProductDetail handleClick={props.handleClick} item={props.item} />,
        overlayElement as HTMLDivElement
      )}
      {ReactDOM.createPortal(
        <Backdrop handleClick={props.handleClick} />,
        backdropElement as HTMLDivElement
      )}
    </>
  );
}

export default ProductDetailModal;
