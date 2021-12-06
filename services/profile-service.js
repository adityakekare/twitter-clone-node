// let profileJson = require('../data/profile.json');
const dao = require('../db/profile/profile-dao');

module.exports = (app) => {

    // const getProfile = (req, res) => {
    //     res.json(profileJson);
    // }
    //
    // const updateCurrentProfile = (req, res) => {
    //     const currProfile = req.body;
    //     // console.log(currProfile);
    //     profileJson = [{...currProfile}];
    //
    //     res.json(profileJson);
    // };

    const findAllProfiles = (req, res) =>
        dao.findAllProfiles().then(profiles => res.json(profiles));

    const updateCurrentProfile = (req, res) => {
        dao.updateProfile(req.params.id, req.body)
            .then(status => res.send(status));
    }


    app.put("/api/profile", updateCurrentProfile);
    app.get('/api/profile', findAllProfiles);
};