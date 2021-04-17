import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

function NotFoundPage(): JSX.Element {
  return (
    <div style={styles.container}>
      <div>
        <Typography variant="h4">404 Error, Page not found</Typography>
        <Link to="/" style={styles.linkButton}>
          <Typography variant="h6"> {">/. Back to Home"}</Typography>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  linkButton: {
    textDecoration: "none",
    color: "pink",
  },
};

export default NotFoundPage;
