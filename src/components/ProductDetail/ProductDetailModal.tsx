import ReactDOM from "react-dom";
import { useTheme } from "styled-components";
import { ProductItemType } from "../model/ItemType";
import Backdrop from "./Backdrop/Backdrop";
import ProductDetail from "./ProductDetail/ProductDetail";

const backdropElement = document.getElementById("backdrop");
const overlayElement = document.getElementById("overlay");

type ProductDetailModalProps = {
  item: ProductItemType;
  handleClick: () => void;
};

function ProductDetailModal(props: ProductDetailModalProps) {
  const theme = useTheme();
  return (
    <>
      {ReactDOM.createPortal(
        <ProductDetail handleClick={props.handleClick} item={props.item} />,
        overlayElement as HTMLDivElement
      )}
      {ReactDOM.createPortal(
        <Backdrop theme={theme} handleClick={props.handleClick} />,
        backdropElement as HTMLDivElement
      )}
    </>
  );
}

export default ProductDetailModal;
