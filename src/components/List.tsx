import React from "react";
import {
  Grid,
  Paper,
  makeStyles,
  createStyles,
  Theme,
  Avatar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 100,
      flexGrow: 1,
    },
    paper: {
      height: 220,
      width: 340,
      backgroundColor: "#ebebeb",
    },
    avatarImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
  })
);

export interface Props {
  userAvatar: string;
  firstName: string;
  lastName: string;
}

export default function List({ userAvatar, firstName, lastName }: Props) {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item className={classes.root} xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid key={1} item>
            <Paper className={classes.paper} elevation={2}>
              <Grid container justify="center">
                <Avatar
                  alt="User"
                  className={classes.avatarImage}
                  src={userAvatar}
                />
                <Typography variant="subtitle1">
                  Name: {firstName} {lastName}
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
