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
    var newUser = req.body;
    var match = {
      name: "",
      photo: ""
    }
    var saveScore = 0;
    for (let i = 0; i < friends.length; i++) {
      var score = 0;
      for (let j = 0; j < newUser.scores.length; j++) {
        score += Math.abs(friends[i].scores[j] - newUser.scores[j]);
      }
      if (i === 1) {
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
