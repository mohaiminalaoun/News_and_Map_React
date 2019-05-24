var express = require('express');
var Twitter = require('twitter');
require('dotenv').config();

const server = express();

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    bearer_token: process.env.TWITTER_BEARER_TOKEN

});


server.get('/test', (req, res) => {
    res.send("Hello world");
});

server.get('/twitter/:searchQuery', function (req, res) {
    client.get('search/tweets', { q: req.params.searchQuery })
        .then(function(response) {
            //console.log(response.statuses);
            res.send(response.statuses);
            return;
        })
        .catch(function(error) {
            console.log(error);
        });
});

server.use(express.static('dist'));

server.listen(8081, function () {
    console.log("Example app listening at http://%s:%s", "localhost", 8081);
});
