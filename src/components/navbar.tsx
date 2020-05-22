import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import colors from "../themes/colors.js";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
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
  })
);

function NavBar() {
  const classes = useStyles();

  return (
    <Toolbar variant="dense">
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        NoerNova
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
  );
}

export default NavBar;
