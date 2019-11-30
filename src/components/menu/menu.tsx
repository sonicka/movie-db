import React from "react";
import { navigate } from "@reach/router";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useStyles } from "./menu-styles";

/** Menu component shown on the top of all pages */
const Menu: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
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
