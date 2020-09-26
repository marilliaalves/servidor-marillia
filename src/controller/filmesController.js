const filmes = require('../model/filmespernambucanos.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.send(filmes);
}

module.exports = { getAll };
