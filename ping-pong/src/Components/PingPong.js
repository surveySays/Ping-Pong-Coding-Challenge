import React, { useState, useEffect } from "react";

//MaterialUI
import { makeStyles } from "@material-ui/core/styles";

//Redux
import { connect } from "react-redux";

//Components
import Popup from "./Popup";

const PingPong = (props) => {
  const [winner, setWinner] = useState("");

  useEffect(() => {
    if (props.leftScore === 5) {
      leftWin();
    } else if (props.rightScore === 5) {
      rightWin();
    }
  });

  const leftWin = () => {
    props.dispatch({ type: "INCREMENT_LEFT_WINS" });
    setWinner("You");
    props.dispatch({ type: "SET_POPUP" });
    props.dispatch({ type: "RESET_SCORE" });
  };

  const rightWin = () => {
    props.dispatch({ type: "INCREMENT_RIGHT_WINS" });
    setWinner("AI");
    props.dispatch({ type: "SET_POPUP" });
    props.dispatch({ type: "RESET_SCORE" });
  };

  const incrementScore = (scored) => {
    props.dispatch({ type: scored });
  };

  const classes = useStyles();
  return (
    <div>
      <Popup winner={winner} />
      <div className={classes.wrapper}>
        <h3>Player Score: {props.leftScore}</h3>
        <h3>
          {props.leftWins} : {props.rightWins}
        </h3>
        <h3>AI Score: {props.rightScore}</h3>
      </div>
      <div className={classes.pingBoundary}>
        <div className={classes.wrapper}>
          <div
            className={classes.leftPaddle}
            onClick={() => incrementScore("INCREMENT_LEFT_SCORE")}
          ></div>
          <div
            className={classes.rightPaddle}
            onClick={() => incrementScore("INCREMENT_RIGHT_SCORE")}
          ></div>
        </div>
      </div>
    </div>
  );
};

export const useStyles = makeStyles(() => ({
  pingBoundary: {
    width: "100%",
    height: 500,
    border: "2px solid white",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftPaddle: {
    width: 20,
    height: 100,
    backgroundColor: "#ffffff",
    marginTop: 20,
  },
  rightPaddle: {
    width: 20,
    height: 100,
    backgroundColor: "#ffffff",
    marginTop: 200,
  },
}));

function mapStateToProps(state) {
  return {
    leftScore: state.leftScore,
    rightScore: state.rightScore,
    leftWins: state.leftWins,
    rightWins: state.rightWins,
  };
}

export default connect(mapStateToProps)(PingPong);
