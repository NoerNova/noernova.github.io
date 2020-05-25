import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Toolbar, IconButton, Typography, AppBar } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { NavLink, Link } from "react-router-dom";
import colors from "../themes/colors.js";
import { getCollapseIcon } from "@mui-treasury/layout";
import styled from "styled-components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logoIcon: {
      textDecoration: "none",
      color: "inherit",
    },
    title: {
      flexGrow: 1,
    },
    navbarItem: {
      textDecoration: "none",
      color: "inherit",
      padding: 16,
    },
    activeNavbar: {
      color: colors.activeColor,
    },
    collapse: {
      paddingLeft: -12,
      marginRight: 4,
    },
  })
);

const CollapseIcon = getCollapseIcon(styled);

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <CollapseIcon sidebarId="primarySidebar" className={classes.collapse}>
            {() => <MenuIcon />}
          </CollapseIcon>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.logoIcon}>
              NoerNova
            </Link>
          </Typography>
          <NavLink
            exact
            to="/"
            activeClassName={classes.activeNavbar}
            className={classes.navbarItem}
          >
            Home
          </NavLink>
          <NavLink
            to="/project"
            activeClassName={classes.activeNavbar}
            className={classes.navbarItem}
          >
            Projects
          </NavLink>
          <NavLink
            to="/posts"
            activeClassName={classes.activeNavbar}
            className={classes.navbarItem}
          >
            Posts
          </NavLink>
          <NavLink
            to="/about"
            activeClassName={classes.activeNavbar}
            className={classes.navbarItem}
          >
            About
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
