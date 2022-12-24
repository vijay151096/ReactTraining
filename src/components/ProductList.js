import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import { Card } from "semantic-ui-react";
import classes from "./ProductList.module.css";

function ProductList() {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItemsList(data);
      });
  }, []);

  let products = itemsList.map((item) => (
    <Product key={item.name} item={item} />
  ));

  return (
    <div className={classes.divcenter} >
        <div className={classes.margin}>
          <Card.Group doubling itemsPerRow={4} stackable>
            {products}
          </Card.Group>
        </div>
    </div>
  );
}

export default ProductList;
