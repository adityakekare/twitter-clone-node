let profileJson = require('../data/profile.json');

module.exports = (app) => {

    const getProfile = (req, res) => {
        res.json(profileJson);
    }

    const updateCurrentProfile = (req, res) => {
        const currProfile = req.body;
        // console.log(currProfile);
        profileJson = [{...currProfile}];

        res.json(profileJson);
    };


    app.put("/api/profile/", updateCurrentProfile);
    app.get('/api/profile', getProfile);
};