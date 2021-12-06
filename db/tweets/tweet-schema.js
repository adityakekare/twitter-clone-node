const mongoose = require('mongoose');
const schema = mongoose.Schema({
                                   image: String,
                                   author: String,
                                   handle: String,
                                   time: String,
                                   tweet: String,
                                   postImage:String,
                                   caption:String,
                                   text:String,
                                   likes: Number
                               }, {collection: "tweets"});
module.exports = schema;
