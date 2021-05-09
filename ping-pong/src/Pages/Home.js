import React from "react";

//MaterialUI
import { makeStyles } from "@material-ui/core/styles";

//Components
import PingPong from "../Components/PingPong";
import Leaderboard from "../Components/Leaderboard";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.innerRoot}>
        <h1>Ping Pong</h1>
        <PingPong />
        <Leaderboard />
      </div>
    </div>
  );
};

export const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    minHeight: 500,
  },
  innerRoot: {
    width: "92%",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1440,
    color: "#ffffff",
    fontFamily: "Montserrat",
  },
}));

export default Home;
