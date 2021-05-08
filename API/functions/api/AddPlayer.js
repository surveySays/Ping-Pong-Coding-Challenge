const { admin, db } = require("../util/admin");

const firebaseConfig = require("../util/config");

exports.addPlayer = async (request, response) => {
  try {
    const newPlayer = {
      name: request.body.name,
      wins: request.body.wins,
      losses: request.body.losses,
    };

    await db.collection("leaderboard").add(newPlayer); //Store the emails of the user

    console.log("Player added to leaderboard!");

    return response.status(200).json({
      message: `Thank you! Score saved!`,
    });
  } catch (err) {
    return response
      .status(500)
      .json({ general: "Something went wrong, please try again" });
  }
};
