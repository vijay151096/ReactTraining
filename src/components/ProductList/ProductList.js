import React from "react";
import { useEffect } from "react";
import Product from "../Product/Product";
import { Card } from "semantic-ui-react";
import classes from "./ProductList.module.css";
import useFetch from "../../hooks/use-Fetch";

function ProductList() {
  const { data, state, fetchRequest } = useFetch();

  useEffect(() => {
    const loadData = async () => {
      await fetchRequest("items", "GET");
    };

    loadData();
  }, []);

  let products =
    state === "done" ? (
      data.map((item) => <Product key={item.id} item={item} />)
    ) : state === "error" ? (
      <h1>Error occured while fetching data</h1>
    ) : (
      <h1>Fetching Data...</h1>
    );

  return (
    <div className={classes.divcenter}>
      <div className={classes.margin}>
        <Card.Group
          doubling
          itemsPerRow={4}
          stackable
          data-testid="products-card"
        >
          {products}
        </Card.Group>
      </div>
    </div>
  );
}

export default ProductList;
