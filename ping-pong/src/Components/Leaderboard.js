import React from "react";

//MaterialUI
import { makeStyles } from "@material-ui/core/styles";

//CSS
import "../App.css";

//Firebase Functions Event Listener
import { LoadLeaders } from "../Firebase/LoadLeaders";

const Leaderboard = () => {
  const classes = useStyles();
  const leaderboard = LoadLeaders();

  return (
    <div>
      <div className={classes.header}>
        <h3 style={{ textAlign: "center" }}>Leaderboard</h3>
        <div className={classes.wrapper}>
          <h4>Names</h4>
          <div className={classes.right}>
            <h4 style={{ marginLeft: -10 }}>Losses</h4>
            <h4 style={{ marginRight: 10 }}>Wins</h4>
          </div>
        </div>
      </div>
      <div
        style={{
          maxHeight: 500,
          overflowY: "scroll",
          marginBottom: 20,
          borderBottom: "2px solid white",
        }}
        className="scroll"
      >
        {leaderboard.map((people, index) => (
          <div className={classes.wrapper}>
            <h4>
              {index + 1}. {people.name}
            </h4>
            <div className={classes.right}>
              <h4 style={{ marginLeft: 15 }}>{people.losses}</h4>
              <h4 style={{ marginRight: 15 }}>{people.wins}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  right: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
  },
  header: {
    width: "100%",
    borderBottom: "2px solid white",
    marginTop: 50,
  },
}));

export default Leaderboard;
