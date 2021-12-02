let profileJson = require('../data/profile.json');

module.exports = (app) => {

    const getProfile = (req, res) => {
        res.json(profileJson);
    }

    app.get('/api/profile', getProfile);
};