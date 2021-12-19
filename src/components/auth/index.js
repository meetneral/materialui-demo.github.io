import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const Auth = ({ handleSignIn }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <img
          src="https://cdn.worldvectorlogo.com/logos/google-keep.svg"
          height="100px"
          alt="google-keep"
        />
        <Typography gutterBottom variant="h4" className={classes.title}>
          Keep Clone
        </Typography>
        <Button onClick={handleSignIn} variant="contained" color="primary">
          Login
        </Button>
      </Paper>
    </div>
  );
};

export default Auth;
