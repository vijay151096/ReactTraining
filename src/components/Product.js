import React from "react";
import { Card, Button } from "semantic-ui-react";
import { useState } from "react";
import { CardActions, CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import classes from "../styles/Product.module.css";

function Product({ item }) {
  const [quantity, setQuantity] = useState(1);

  const handleClick = async (e, id) => {
    const bodyToSent = { ...item, quantity: quantity };

    fetch("http://localhost:8080/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyToSent),
    })
      .then((response) => response.json())
      .then(() => {
        setQuantity(1);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`https://picsum.photos/200/300?random=${item.id}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"> {" "} {item.name} {" "} </Typography>
        <Typography variant="body3" color="text.secondary"> {" "} {item.meta} {" "} </Typography>
        <Typography variant="body2" color="text.secondary"> {" "} Rs. {item.price} {" "} </Typography>
          <div className="detailSection">
                <Typography variant="body4" color="text.secondary"> {" "} {item.details} {" "} </Typography>
          </div>
      </CardContent>
      <CardActions>
        <div className={classes.alignButtons}>
          <div className={classes.quantityBtns}>
            <i
              className={`minus icon ${classes.iconCursor}`}
              onClick={() => {
                setQuantity((prevQuantity) => {
                  if (prevQuantity > 1) {
                    return prevQuantity - 1;
                  }
                  return prevQuantity;
                });
              }}
            ></i>
            <span className={classes.chgInline}>{quantity}</span>
            <i
              className={`plus icon ${classes.iconCursor}`}
              onClick={() => {
                setQuantity((prevQuantity) => {
                  return prevQuantity + 1;
                });
              }}
            ></i>
          </div>
          <Button size="small" onClick={(e) => handleClick(e, item.id)} primary>
            Add
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}

export default Product;
