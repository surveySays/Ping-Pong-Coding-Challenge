import React, { useState } from "react";

//MaterialUI
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";

//Redux
import { connect } from "react-redux";

//Components
import MediaQuery from "../Components/MediaQuery";
import AlertSuccess from "../Components/AlertSuccess";

//APIcall
import { AddLeader } from "../Firebase/AddLeader";

const Popup = (props) => {
  const isMobile = MediaQuery("(min-width: 820px)");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const close = () => {
    setName("");
    setNameError(false);
    props.dispatch({ type: "SET_POPUP" });
  };

  const sendData = () => {
    if (!name.trim()) {
      setNameError(true);
      return;
    }

    setNameError(false);

    const data = {
      name: name,
      wins: props.leftWins,
      losses: props.rightWins,
    };

    AddLeader(data);
    close();

    setShowAlert(true);

    setTimeout(function () {
      setShowAlert(false);
    }, 4000);
  };

  const classes = useStyles();
  return (
    <div>
      {showAlert ? <AlertSuccess /> : null}
      <Backdrop
        className={classes.backdrop}
        open={props.popup}
        style={{
          backgroundColor:
            props.winner === "You"
              ? "rgb(152, 255, 117, 0.7)"
              : "rgb(111, 66, 66, 0.7)",
        }}
      >
        <div className={classes.box}>
          {props.winner === "You" ? (
            <h2 style={{ textAlign: "center" }}>You won!</h2>
          ) : (
            <h2 style={{ textAlign: "center" }}>You lost!</h2>
          )}
          <h3 style={{ textAlign: "center" }}>
            Save your current score on the leaderboard?
          </h3>
          <h4>Wins: {props.leftWins}</h4>
          <h4>Losses: {props.rightWins}</h4>
          <TextField
            style={{ marginTop: 10, marginBottom: 10 }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            error={nameError}
            autoFocus={false}
            InputLabelProps={{ classes: { root: classes.textF } }}
            InputProps={{ className: classes.multilineColor }}
            className={classes.textF}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {isMobile ? (
            <div className={classes.wrapper}>
              <div className={classes.button}>
                <h4 style={{ margin: 0 }} onClick={() => close()}>
                  Keep Playing!
                </h4>
              </div>
              <div className={classes.button} onClick={() => sendData()}>
                <h4 style={{ margin: 0 }}>Save Score</h4>
              </div>
            </div>
          ) : (
            <div className={classes.buttonMiddle}>
              <div
                className={classes.button}
                style={{ marginTop: 10 }}
                onClick={() => close()}
              >
                <h4 style={{ margin: 0 }}>Keep Playing!</h4>
              </div>
              <div
                className={classes.button}
                style={{ marginTop: 10 }}
                onClick={() => sendData()}
              >
                <h4 style={{ margin: 0 }}>Save Score</h4>
              </div>
            </div>
          )}
        </div>
      </Backdrop>
    </div>
  );
};

export const useStyles = makeStyles((props) => ({
  box: {
    width: "50%",
    height: "auto",
    border: "2px solid white",
    backgroundColor: "#000000",
    color: "white",
    padding: 10,
  },
  backdrop: {
    backgroundColor:
      props.winner === "AI" ? "rgb(111, 66, 66, 0.7)" : "rgb(66, 66, 66, 0.7)",
    zIndex: 5,
    overflowY: "hidden",
    overflow: "hidden",
  },
  button: {
    padding: 10,
    width: 150,
    backgroundColor: "white",
    color: "#000000",
    borderRadius: 10,
    textAlign: "center",
    "&:hover": {
      backgroundColor: "grey",
      cursor: "pointer",
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  buttonMiddle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  multilineColor: {
    color: "white",
  },
  textF: {
    width: "100%",
    fontFamily: "Montserrat",
    textAlign: "left",
    color: "white",
    "& label.Mui-focused": {
      color: "white",
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        fontFamily: "Montserrat",
        color: "white",
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
        color: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        color: "white",
      },
    },
  },
}));

function mapStateToProps(state) {
  return {
    leftScore: state.leftScore,
    rightScore: state.rightScore,
    leftWins: state.leftWins,
    rightWins: state.rightWins,
    popup: state.popup,
  };
}

export default connect(mapStateToProps)(Popup);
