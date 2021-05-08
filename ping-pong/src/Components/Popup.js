import React, { useState, useEffect } from "react";

//MaterialUI
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

//Redux
import { connect } from "react-redux";

const Popup = (props) => {
  const close = () => {
    props.dispatch({ type: "SET_POPUP" });
  };

  const sendData = () => {
    console.log("here");
    const data = {
      name: "tester",
      wins: 55,
      losses: 111,
    };

    fetch(
      "https://us-central1-ping-pong-48e76.cloudfunctions.net/api/addplayer/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const classes = useStyles();
  return (
    <div>
      <Backdrop className={classes.backdrop} open={props.popup}>
        <div className={classes.box}>
          <h3>{props.winner} WON! Save your score on the leaderboard!</h3>
          <h5>Wins: 5</h5>
          <h5>Losses: 5</h5>
          <Typography>Name</Typography>
          <TextField
            style={{ marginTop: 10 }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            autoFocus={false}
            InputLabelProps={{ classes: { root: classes.textF } }}
            InputProps={{ className: classes.multilineColor }}
            className={classes.textF}
            //value={email}
            //onChange={(e) => setEmail(e.target.value)}
          />
          <div className={classes.button}>
            <h4 style={{ margin: 0 }} onClick={() => close()}>
              Keep Playing!
            </h4>
          </div>
          <div className={classes.button} onClick={() => sendData()}>
            <h4 style={{ margin: 0 }}>Save Score</h4>
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export const useStyles = makeStyles(() => ({
  box: {
    width: "50%",
    height: 500,
    border: "2px solid white",
    backgroundColor: "#000000",
    color: "white",
  },
  backdrop: {
    backgroundColor: "rgb(66, 66, 66, 0.7)",
    zIndex: 3,
    overflowY: "hidden",
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
