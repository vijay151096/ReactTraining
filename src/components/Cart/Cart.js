import React, { useState, useEffect } from "react";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button } from "semantic-ui-react";
import classes from "./Cart.module.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/cart")
      .then((response) => response.json())
      .then((data) => {
        let cost = 0;
        for (let json in data) {
          cost += data[json].price*data[json].quantity;
        }
        setTotalCost(cost);
        setCart(data);
      });
  }, []);

  const handleClick = async (e, id) => {
    await fetch(`http://localhost:8080/cart/${id}`, { method: "DELETE" });
    const newCart = await cart.filter((c) => c.id !== id);
    await setCart(newCart);
    let cost = 0;
    for (let json in newCart) {
      cost += newCart[json].price*newCart[json].quantity;
    }
    setTotalCost(cost);
  };

  const cartItems = cart.map((cartItem) => {
    return (
      <>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt={cartItem.name}
              src={`https://picsum.photos/200/300?random=${cartItem.id}`}
            />
          </ListItemAvatar>
          <ListItemText
              data-testid={`ItemName_${cartItem.id}`}
            primary={cartItem.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  data-testid={`ItemPrice_${cartItem.id}`}
                >
                  Price : {cartItem.price}
                </Typography>

                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  className={classes.chgBlock}
                  data-testid={`ItemQuantity_${cartItem.id}`}
                >
                  Quantity : {cartItem.quantity}
                </Typography>
              </React.Fragment>
            }
          />
          <Button size="small" data-testid={`removeProduct_${cartItem.id}`} onClick={(e) => handleClick(e, cartItem.id)}>
            Remove
          </Button>
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  });

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        marginLeft: "40%",
        marginTop: "20px",
      }}
    >
      {cartItems}
      <ListItem>
        <ListItemAvatar />
        <ListItemText id={"totalCostOfCartItems"}>
            {totalCost == 0 && <h4>No Items in Cart</h4> }
            {totalCost > 0 && <h4>Total Amount = {totalCost}</h4> }
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default Cart;