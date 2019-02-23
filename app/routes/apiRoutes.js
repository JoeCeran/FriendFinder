// ===============================================================================
// LOAD DATA
// ===============================================================================

let friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var newUser = req.body;
    var match = {
      name: "",
      photo: ""
    }

    var saveScore = 0;
    for (let i = 0; i < friends.length; i++) {

      var questionScore = 0;

      for (let j = 0; j < newUser.scores.length; j++) {
        questionScore += Math.abs(friends[i].scores[j] - newUser.scores[j]);
      }

      if (i === 1) {
        saveScore = questionScore;
        match.name = friends[i].name;
        match.photo = friends[i].photo;
      }

      else {
        if (questionScore <= saveScore) {
          saveScore = questionScore;
          match.name = friends[i].name;
          match.photo = friends[i].photo;
        };
      };
    };
    res.json(match);
  });
}

// ---------------------------------------------------------------------------
