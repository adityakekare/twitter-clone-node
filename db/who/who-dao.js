const model = require('./who-model');

const findAllItems = () => model.find();

const createItem = (tweet) => model.create(tweet);


const deleteItem = (id) => model.deleteOne({_id: id});


const updateItem = (id, item) => model.updateOne({_id: id},
                                                   {$set: item});

module.exports = {
    findAllItems, createItem,
    deleteItem, updateItem
};
