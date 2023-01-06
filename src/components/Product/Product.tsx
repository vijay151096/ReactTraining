import React, { useEffect } from "react";
import { Card, Button } from "semantic-ui-react";
import { useState } from "react";
import { CardActions, CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import classes from "./Product.module.css";
import ProductDetailModal from "../ProductDetail/ProductDetailModal";
import useFetch from "../../hooks/useFetch";
import {ProductItemType} from "../model/ItemType";


const Product: React.FC<{ item: ProductItemType }> = ({
  item,
}) => {
  const [quantity, setQuantity] = useState(1);

  const { state, fetchRequest } = useFetch();

  const [isProductDetailsVisibile, setIsProductDetailsVisibile] =
    useState(false);

  const handleNameClick = () => {
    setIsProductDetailsVisibile(true);
  };

  const handleCloseProductDetail = () => {
    setIsProductDetailsVisibile(false);
  };

  const handleClick = async (e: React.MouseEvent, id: number) => {
    const bodyToSent = { ...item, quantity: quantity };
    await fetchRequest("cart", "POST", bodyToSent);
  };

  useEffect(() => {
    if (state === "done") {
      setQuantity(1);
    }
    if (state === "error") {
      console.log("Error Occured!");
    }
  }, [state]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        data-testid="item-image"
        component="img"
        alt="green iguana"
        height="140"
        image={`https://picsum.photos/200/300?random=${item.id}`}
      />
      <CardContent>
        <Typography
          data-testid="item-name"
          gutterBottom
          variant="h5"
          component="div"
          onClick={handleNameClick}
          className={classes.linkToProducts}
        >
          {item.name}
        </Typography>
        {isProductDetailsVisibile && (
          <ProductDetailModal
            handleClick={handleCloseProductDetail}
            item={item}
          />
        )}
        <Typography
          data-testid="item-meta"
          variant="body2"
          color="text.secondary"
        >
          {item.meta}
        </Typography>
        <Typography
          data-testid="item-price"
          variant="body2"
          color="text.secondary"
        >
          Rs. {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={classes.alignButtons}>
          <div className={classes.quantityBtns}>
            <i
              className={`minus icon ${classes.iconCursor}`}
              data-testid="minus-icon"
              onClick={() => {
                setQuantity((prevQuantity) => {
                  if (prevQuantity > 1) {
                    return prevQuantity - 1;
                  }
                  return prevQuantity;
                });
              }}
            ></i>
            <span data-testid="item-quantity" className={classes.chgInline}>
              {quantity}
            </span>
            <i
              className={`plus icon ${classes.iconCursor}`}
              data-testid="plus-icon"
              onClick={() => {
                setQuantity((prevQuantity) => {
                  return prevQuantity + 1;
                });
              }}
            ></i>
          </div>
          <Button
            data-testid={`addProduct_${item.id}`}
            size="small"
            onClick={(e) => handleClick(e, item.id)}
            primary
          >
            Add
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default Product;
