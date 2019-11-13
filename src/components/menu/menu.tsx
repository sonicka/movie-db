import React from "react";
import { navigate } from "@reach/router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useStyles } from "./menu-styles";

const Menu: React.FC = props => {
  const classes = useStyles(props);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button className={classes.menuItem} onClick={() => navigate("/")}>
          Movies
        </Button>
        <Button
          className={classes.menuItem}
          onClick={() => navigate("/search")}
        >
          Search
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
