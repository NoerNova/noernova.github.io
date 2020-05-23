import colors from "../themes/colors";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appHeader: {
      backgroundColor: colors.homeBackgroundColor,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "10px + 2vmin",
      color: "white",
    },
    appLogo: {
      height: "40vmin",
      pointerEvents: "none",
    },
    appLink: {
      color: "#61dafb",
    },
  })
);

export default useStyles;
