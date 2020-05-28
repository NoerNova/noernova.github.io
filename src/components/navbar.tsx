import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Toolbar, Typography, AppBar, Hidden } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { NavLink, Link } from "react-router-dom";
import colors from "../themes/colors.js";
import { getCollapseIcon } from "@mui-treasury/layout";
import styled from "styled-components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      flex: 1,
    },
    menuButton: {
      transform: "rotate(-90deg)",
    },
    logoIcon: {
      textDecoration: "none",
      color: colors.mainFontColors,
      fontFamily: "NovaMono",
      fontWeight: "normal",
      fontSize: "1.8rem",
      paddingLeft: "2rem",
    },
    title: {
      flexGrow: 1,
    },
    navbarContainer: {
      background: "transparent",
      boxShadow: "none",
      paddingTop: "1rem",
      paddingRight: "2rem",
    },
    navbarItem: {
      textDecoration: "none",
      padding: 16,
      color: colors.mainFontColors,
      fontFamily: "Helvetica",
      fontSize: "1.2rem",
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
    <div>
      <AppBar className={classes.navbarContainer}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.logoIcon}>
              n-o-v-a
            </Link>
          </Typography>
          <Hidden smDown>
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
          </Hidden>
          <Hidden mdUp>
            <CollapseIcon
              sidebarId="primarySidebar"
              className={classes.collapse}
            >
              {() => (
                <MenuIcon fontSize="large" className={classes.menuButton} />
              )}
            </CollapseIcon>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
