const tweetsJson = require('../data/tweets.json');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        res.json(tweetsJson);
    }

    const postNewTweet = (req, res) => {
        const newTweet = {
            "_id" : (new Date()).getTime() + '',
            "caption": "Web Development",
            "author": "ReactJS",
            "handle": "ReactJS",
            "time": "2h",
            "image": "../../images/react.png",
            "postImage": "../../images/react.png",
            "likes": 0,
            ...req.body,
        }
        let tweets = [
            newTweet,
            ...tweetsJson
        ];
        res.json(tweets);
    }

    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        let tweets = tweetsJson.filter(tweet => tweet._id !== id);
        res.sendStatus(200);
    }

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        let tweets = tweetsJson.map(tweet => {
            console.log(tweet);
            console.log(id);
            if (tweet._id === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.likes--;
                } else {
                    tweet.liked = true;
                    tweet.likes++;
                }
                return tweet;
            } else {
                return tweet;
            }
        });
        res.sendStatus(200);
    }


    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', postNewTweet);
    app.get('/api/tweets', findAllTweets);
};
