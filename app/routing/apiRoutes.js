module.exports = apiRouting = function (app, path) {

    var friendsJS = require(path.join(__dirname, "..", "data", "friends.js"));

    app.get("/api/friends", function (req, res) {
        res.json(friendsJS);
    });

    app.post("/api/friends", function (req, res) {

        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var user = req.body;
        var lowest;

        for (var i = 0; i < friendsJS.length; i++) {
            var friendScore = friendsJS[i].scores;
            var totalDifference = 0;
            for (var j = 0; j < friendScore.length; j++) {
                totalDifference = totalDifference + Math.abs(user.scores[j] - friendScore[j]);
            }
            if (i == 0 || totalDifference < lowest.difference) {
                lowest = {
                    index: i,
                    difference: totalDifference
                }
            } else if (totalDifference === lowest.difference) {
                if (Math.floor(Math.random() * 2) === 0) {
                    lowest = {
                        index: i,
                        difference: totalDifference
                    }
                }
            }
        }

        res.json(friendsJS[lowest.index]);

        friendsJS.push(user);

    });
}