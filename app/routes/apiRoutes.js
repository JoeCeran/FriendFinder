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
    var Scored;
    var score = 0;
    var user = req.body;
    var match = {
      name: "",
      photo: ""
    }
    for (let i = 0; i < friends.length; i++) {
      for (let x = 0; x < user.scores.length; x++) {
        score += Math.abs(friends[i].scores[x] - user.scores[x]);
      }
      if (i == 1 || score <= Scored) {
        Scored = score;
        match.name = friends[i].name;
        match.photo = friends[i].photo;
      }
    };
    res.json(match);
  });
}

// ---------------------------------------------------------------------------
