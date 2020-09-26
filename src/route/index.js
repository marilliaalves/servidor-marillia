const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: 'Filmes feitos em Pernambuco',
        informações: 'Contém informações acerca da direção e ano'
    
    })
});

module.exports = router;