import React, { useState } from "react";

//Components

//MaterialUI
import { makeStyles } from "@material-ui/core/styles";

//Pages
import Home from "./Pages/Home";

//npmjs
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
    backgroundColor: "#000000",
  },
}));
