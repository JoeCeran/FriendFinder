// ===============================================================================
// LOAD DATA
// ===============================================================================

let friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {
    let newUser = req.body;
    let bestMatch = {
      name: "",
      photo: ""
    }

    let saveScore = 0;
    for (let i = 0; i < friendsData.length; i++) {

      let questionScore = 0;

      for (let j = 0; j < newUser.scores.length; j++) {
        questionScore += Math.abs(friendsData[i].scores[j] - newUser.scores[j]);
      }

      if (i === 1) {
        saveScore = questionScore;
        bestMatch.name = friendsData[i].name;
        bestMatch.photo = friendsData[i].photo;
      }

      else {
        if (questionScore <= saveScore) {
          saveScore = questionScore;
          bestMatch.name = friendsData[i].name;
          bestMatch.photo = friendsData[i].photo;
        };
      };
    };
    res.json(bestMatch);
  });
}

// ---------------------------------------------------------------------------
