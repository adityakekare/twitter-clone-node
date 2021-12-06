const dao = require("../db/who/who-dao");

module.exports = (app) => {
    const findAllWho = (req, res) =>
        dao.findAllItems().then(who => res.json(who));
    
    app.get("/rest/who", findAllWho);
}
