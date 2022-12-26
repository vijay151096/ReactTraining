import React from "react";
import { Card, Button } from "semantic-ui-react";
import { useState } from "react";
import {CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

function Product({ item }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = async (e, id) => {
    setIsAdded((prevState) => !prevState);
    if (!isAdded) {
        fetch("http://localhost:8080/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        })
            .then((response) => response.json())
            .then(() => {
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    } else {
        fetch(`http://localhost:8080/cart/${id}`, {
            method: "DELETE"
        })
            .then(() => {})
            .catch((error) => {
                console.error("Error:", error);
            });
    }
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
              <Typography gutterBottom variant="h5" component="div"> {item.name} </Typography>
              <Typography variant="body3" color="text.secondary"> {item.meta} </Typography>
              <Typography variant="body2" color="text.secondary"> Rs. {item.price} </Typography>
          </CardContent>
          <CardActions>
                   {  ( !isAdded && <Button size="small" onClick={(e) => handleClick(e, item.id)} primary>Add</Button> )
                  ||  ( isAdded && <Button size="small" onClick={(e) => handleClick(e, item.id)}>Remove</Button> ) }
          </CardActions>
      </Card>
  );
}

export default Product;
