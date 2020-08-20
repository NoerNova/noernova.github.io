import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  makeStyles,
  createStyles,
  Theme,
  Avatar,
  Typography,
} from "@material-ui/core";

import photoP2 from "../assets/images/me2.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 100,
      flexGrow: 1,
    },
    card: {
      height: 400,
      width: 200,
      // backgroundImage: `url(${photoP2})`,
      // backgroundSize: "cover",
      // backgroundPosition: "center",
    },
    avatarImage: {
      width: 200,
      height: 220,
      borderRadius: 10,
    },
    media: {
      height: "85%",
    },
  })
);

export interface Props {
  userAvatar: string;
  firstName: string;
  lastName: string;
}

export default function BlogsCard({ userAvatar, firstName, lastName }: Props) {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item className={classes.root} xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid key={1} item>
            <Card className={classes.card} elevation={3}>
              <CardMedia
                className={classes.media}
                image={userAvatar}
                title={firstName}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {firstName} {lastName}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
