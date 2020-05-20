import React, { Component } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Layout, { Root, getHeader } from "@mui-treasury/layout";
import styled from "styled-components";

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder.registerConfig("xs", {
    position: "fixed",
    clipped: true,
    initialHeight: 64,
  });
});

const Header = getHeader(styled);

function NavBar() {
  return (
    <Root scheme={scheme}>
      <Header>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Header>
    </Root>
  );
}

export default NavBar;
