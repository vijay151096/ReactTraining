import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "semantic-ui-react";
import styled from "styled-components";

const ProductDetail = ({ handleClick, item }) => {
  const StyledDiv = styled.div({
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: "20",
    transform: "translate(-50%, -50%)",
    backgroundColor: "aliceblue",
  });

  return (
    <StyledDiv>
      <Card sx={{ width: 500 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={`https://picsum.photos/200/300?random=${item.id}`}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.meta}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.details}
          </Typography>
          <Divider variant="inset" component="li" />
          <Typography variant="body2" color="text.secondary">
            Rs. {item.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleClick} size="small">
            Close
          </Button>
        </CardActions>
      </Card>
    </StyledDiv>
  );
};

export default ProductDetail;
