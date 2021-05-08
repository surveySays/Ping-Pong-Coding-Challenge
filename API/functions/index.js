const functions = require("firebase-functions");

const app = require("express")();

const cors = require("cors");
app.use(cors());

const firebaseConfig = require("./util/config");
const firebase = require("firebase");

firebase.initializeApp(firebaseConfig);

const { addPlayer } = require("./api/AddPlayer");

app.post("/addplayer", addPlayer);

exports.api = functions.https.onRequest(app);
