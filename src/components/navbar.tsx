import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import {
  Toolbar,
  Typography,
  AppBar,
  Hidden,
  Modal,
  Fade,
  IconButton,
  Backdrop,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { NavLink, Link } from "react-router-dom";
import colors from "../themes/colors.js";
import SocialLink from "../components/socialLink";
import { SocialContainer } from "../styles/homeStyle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuIcon: {
      transform: "rotate(-90deg)",
      fontSize: "1.8rem",
      color: colors.mainFontColors,
    },
    homeIcon: {
      fontSize: "2rem",
      color: colors.mainFontColors,
    },
    menuButton: {
      paddingLeft: -12,
      marginRight: -15,
    },
    closeMenuButton: {
      position: "absolute",
      top: "2%",
      right: "4%",
    },
    homeMenuButton: {
      position: "absolute",
      top: "2%",
      left: "4%",
    },
    logoIcon: {
      textDecoration: "none",
      color: colors.mainFontColors,
      fontFamily: "NovaMono",
      fontWeight: "normal",
      fontSize: "1.8rem",
      paddingLeft: "1rem",
      "@media (max-width: 760px)": {
        fontSize: "1.5rem",
      },
    },
    title: {
      flexGrow: 1,
    },
    navbarContainer: {
      background: "transparent",
      boxShadow: "none",
      paddingTop: "1rem",
      paddingRight: "1rem",
    },
    navbarItem: {
      textDecoration: "none",
      padding: 16,
      color: colors.mainFontColors,
      fontFamily: "Helvetica",
      fontSize: "1.2rem",
      "@media (max-width: 600px)": {
        fontSize: "1.4rem",
        fontFamily: "Kefa",
        padding: 1,
      },
    },
    activeNavbar: {
      color: colors.activeColor,
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: "#fff",
      border: `2px solid ${colors.mainFontColors}`,
      padding: theme.spacing(2, 4, 3),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      height: "95%",
    },
    navlinkItemsSplit: {
      fontFamily: "Kefa",
      fontSize: "1.5rem",
      color: `${colors.mainFontColors}`,
      "@media (min-width: 760px)": {
        display: "none",
      },
    },
    socialModalContainer: {
      "@media (max-height: 550px)": {
        visibility: "hidden",
      },
      "@media (min-width: 320px) and (orientation: landscape)": {
        visibility: "hidden",
      },
    },
  })
);

function NavBar() {
  const classes = useStyles();
  const [openModal, setOpenModal] = React.useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const navLinkItemsSplit = () => (
    <p className={classes.navlinkItemsSplit}>·</p>
  );

  const NavLinkItems = () => {
    return (
      <>
        <NavLink
          to="/about"
          activeClassName={classes.activeNavbar}
          className={classes.navbarItem}
          onClick={() => handleModalClose()}
        >
          About
        </NavLink>
        {navLinkItemsSplit()}
        <NavLink
          to="/blogs"
          activeClassName={classes.activeNavbar}
          className={classes.navbarItem}
          onClick={() => handleModalClose()}
        >
          Blogs
        </NavLink>
        {navLinkItemsSplit()}
        <NavLink
          to="/works"
          activeClassName={classes.activeNavbar}
          className={classes.navbarItem}
          onClick={() => handleModalClose()}
        >
          Works
        </NavLink>
        {navLinkItemsSplit()}
        <NavLink
          to="/contact"
          activeClassName={classes.activeNavbar}
          className={classes.navbarItem}
          onClick={() => handleModalClose()}
        >
          Contact
        </NavLink>
      </>
    );
  };

  return (
    <div>
      <AppBar className={classes.navbarContainer}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.logoIcon}>
              n-o-v-a
            </Link>
          </Typography>
          <Hidden xsDown>
            <NavLinkItems />
          </Hidden>
          <Hidden smUp>
            <IconButton
              className={classes.menuButton}
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleModalOpen}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </Hidden>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-descriptns"
            className={classes.modal}
            open={openModal}
            onClose={handleModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openModal}>
              <div className={classes.paper}>
                <IconButton
                  className={classes.closeMenuButton}
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleModalClose}
                >
                  <CloseIcon className={classes.menuIcon} />
                </IconButton>
                <IconButton
                  className={classes.homeMenuButton}
                  aria-label="home"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleModalClose}
                >
                  <NavLink to="/" onClick={() => handleModalClose()}>
                    <HomeIcon className={classes.homeIcon} />
                  </NavLink>
                </IconButton>
                <NavLinkItems />
                <SocialContainer className={classes.socialModalContainer}>
                  <SocialLink />
                </SocialContainer>
              </div>
            </Fade>
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
