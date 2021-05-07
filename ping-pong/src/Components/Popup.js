import React, { useState } from "react";

//MaterialUI
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const Popup = (props) => {
  const [open, setOpen] = useState(true);

  const classes = useStyles();
  return (
    <div>
      {props.winner == "Player" ? (
        <Backdrop className={classes.backdrop} open={open}>
          <div className={classes.box}>
            <h3>You WON! Save your score on the leaderboard!</h3>
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
            <div className={classes.button} onClick={() => setOpen(false)}>
              <h4 style={{ margin: 0 }}>Keep Playing!</h4>
            </div>
            <div className={classes.button}>
              <h4 style={{ margin: 0 }}>Save Score</h4>
            </div>
          </div>
        </Backdrop>
      ) : (
        <Backdrop className={classes.backdrop} open={open}>
          <div className={classes.box}>
            <h3>AI WON! Save your score on the leaderboard!</h3>
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
            <div className={classes.button} onClick={() => setOpen(false)}>
              <h4 style={{ margin: 0 }}>Keep Playing!</h4>
            </div>
            <div className={classes.button}>
              <h4 style={{ margin: 0 }}>Save Score</h4>
            </div>
          </div>
        </Backdrop>
      )}
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

export default Popup;
