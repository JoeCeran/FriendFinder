// ===============================================================================
// LOAD DATA
// linking routes to a series of "data" sources.
// ===============================================================================

let friendsData = require("../data/friendsData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  //When a user submits form data:
  //JSON data is obtained from friendsData file
  //For each friend in the JSON file, for each question, the scores for the friend in the JSON file
  // are compared to the user's scores. 
  //The 2 scores from each questions are subtracted from each other to get the difference.
  //The differences from each question are added together to get a final score.
  //the best match has the lowest score total.  The final score that is calculated from each
  //friend/user is compared to each friend/user score to get the best match. 
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    let newUser = req.body;
    let bestMatch = {
      name: "",
      picture: ""
    }
    let saveScore = 0;
    for (let i = 0; i < friendsData.length; i++) {
      //set question to zero for each friend 

      let questionScore = 0;

      for (let j = 0; j < newUser.scores.length; j++) {
        questionScore += Math.abs(friendsData[i].scores[j] - newUser.scores[j]);
      }

      //first friend is the low score - so save it's data
      //in the event of a tie, the last friend that is compared to is the best match
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
