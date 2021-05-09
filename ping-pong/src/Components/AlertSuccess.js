import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 50,
    right: 50,
    zIndex: 10,
  },
}));

export default function AlertSuccess() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="success">
        <AlertTitle>Success!</AlertTitle>
        Added to leaderboard
      </Alert>
    </div>
  );
}
