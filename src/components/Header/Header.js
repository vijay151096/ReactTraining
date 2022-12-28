import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <div className={classes.divflex}>
          <Link to="/">
            <Typography
              data-testid="title"
              variant="h6"
              color="black"
              component="div"
            >
              Ecommerce
            </Typography>
          </Link>
          <Link to="/cart" data-testid="cart-link">
            <Button data-testid="cart-btn" secondary>
              cart
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
