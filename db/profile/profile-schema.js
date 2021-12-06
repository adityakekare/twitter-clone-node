const mongoose = require('mongoose');
const schema = mongoose.Schema({
                                   firstName: String,	lastName: String,	handle: String,
                                   profilePicture: String, 	bannerPicture: String,
                                   bio: String,	website: String,
                                   location: String,	dateOfBirth: Date,	dateJoined: Date,
                                   followingCount: Number,	followersCount: Number
                               }, {collection: "profiles"});
module.exports = schema;
