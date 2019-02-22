let friends = require("./../data/friendsData")

module.exports = function(router) {

router.get('/api/friends', function(req, res){
    res.json(friends)
});
router.post('/api/friends', function(req, res){
    let newFriend = req.body;
    let scoreArr = newFriend.scores;
    let newScore = 0;
    for (let k = 0; k < scoreArr.length; k++){
        newScore += parseInt(scoreArr[k]);
    }
    let resultsArr = [];
    for (let i = 0; i < friends.length; i++) {
        let sum = friends[i].scores;
        for (let l = 0; l < sum.length; l++) {
            sum[l] = +sum[l];
        }
        console.log(sum);
        let value = sum.reduce(add);
        value = Math.abs(value);
        resultsArr.push(value)
    }
    let indexOf;
    let difference = 51;
    for (let j = 0; j < resultsArr.length; j++) {
        let newDiff = Math.abs(resultsArr[j] - newScore);
        if (newDiff < difference) {
            difference = newDiff;
            indexOf = j
        }
    }
    let responseObj = {}
    responseObj.name = friends[indexOf].name;
    responseObj.photo = friends[indexOf].photo;
    res.send(responseObj);
    friends.push(newFriend);
});
}

function add(a, b) {
    return a + b
}