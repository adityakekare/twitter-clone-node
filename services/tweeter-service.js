let tweetsJson = require('../data/tweets.json');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        res.json(tweetsJson);
    }

    const postNewTweet = (req, res) => {
        // const newTweet = req.body;

        const newTweet = {
            "_id" : (new Date()).getTime() + '',
            "caption": "Web Development",
            "author": "Elon Musk",
            "handle": "elonmusk",
            "time": "2h",
            "image": "../../images/elon.jpg",
            "postImage": "../../images/astronaut.jpg",
            "likes": 0,
            "text": "",
            ...req.body,
        }
        tweetsJson = [
            newTweet,
            ...tweetsJson
        ];
        console.log(tweetsJson);
        res.json(tweetsJson);
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
