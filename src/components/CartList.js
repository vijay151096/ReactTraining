import React, { useState, useEffect } from "react";
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@mui/material";
import Cart from "./Cart";

function CartList() {
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
            <Cart cartItem={cartItem} handleClick/>
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
                    <h4>Total Amount = {totalCost}</h4>
                </ListItemText>
            </ListItem>
        </List>
    );
}

export default CartList;
