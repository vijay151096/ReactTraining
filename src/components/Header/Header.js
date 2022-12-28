import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import UserContext from "../../store/UserContext";
import {useContext} from "react";

function Header() {

  const {isAuthenticated, logout} = useContext(UserContext);

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
          {isAuthenticated && <div>
            <Link to="/cart" data-testid="cart-link">
              <Button data-testid="cart-btn" secondary> cart </Button>
            </Link>
            <Button data-testid="cart-btn" secondary onClick={logout}> Logout </Button>
          </div> }
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
