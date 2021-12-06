const model = require('./profile-model');

const findAllProfiles = () => model.find();

const createProfile = (profile) => model.create(profile);


const deleteProfile = (id) => model.deleteOne({_id: id});


const updateProfile = (id, profile) => model.updateOne({_id: id},
                                                   {$set: profile});

module.exports = {
    findAllProfiles, createProfile,
    deleteProfile, updateProfile
};
