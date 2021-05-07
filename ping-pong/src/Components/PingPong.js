import React, { useState, useEffect } from "react";

//MaterialUI
import { makeStyles } from "@material-ui/core/styles";

//Redux
import { connect } from "react-redux";

//Components
import Popup from "./Popup";
import { render } from "@testing-library/react";

const PingPong = (props) => {
  const [winner, setWinner] = useState("");
  const [showWinner, setShowWinner] = useState(false);

  useEffect(() => {
    if (props.leftScore == 5) {
      incrementWins("INCREMENT_LEFT_WINS");
      setWinner("Player");
      resetScore();
    } else if (props.rightScore == 5) {
      incrementWins("INCREMENT_RIGHT_WINS");
      setWinner("AI");
      resetScore();
    }
  });

  const resetScore = () => {
    props.dispatch({ type: "RESET_SCORE" });
    popUp();
  };

  const popUp = () => {
    return render(<Popup winner={winner} />);
  };

  const incrementScore = (scored) => {
    props.dispatch({ type: scored });
  };

  const incrementWins = (win) => {
    props.dispatch({ type: win });
  };

  const classes = useStyles();
  return (
    <div>
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
