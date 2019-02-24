// ===============================================================================
// LOAD DATA
// ===============================================================================
let friends = require("../data/friends");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function (req, res) {
    var saveScore;
    var score = 0;
    var User = req.body;
    var match = {
      name: "",
      photo: ""
    }
    for (let i = 0; i < friends.length; i++) {
      for (let j = 0; j < User.scores.length; j++) {
        score += Math.abs(friends[i].scores[j] - User.scores[j]);
      }
      if (i == 1) {
        saveScore = score;
        match.name = friends[i].name;
        match.photo = friends[i].photo;
      }
      else {
        if (score <= saveScore) {
          saveScore = score;
          match.name = friends[i].name;
          match.photo = friends[i].photo;
        };
      };
    };
    res.json(match);
  });
}

// ---------------------------------------------------------------------------
