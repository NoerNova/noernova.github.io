import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";

import { Toolbar, IconButton } from "@material-ui/core";

function NavBar() {
  return (
    <Toolbar variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
    </Toolbar>
  );
}

export default NavBar;
