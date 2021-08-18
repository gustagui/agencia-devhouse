const express = require('express');
const produtoController = require('../controllers/produtos');
const routes = express.Router();
const { uuid } = require('uuidv4');


routes.get("/admin/cadastro-produto", produtoController.cadastrarProduto);
routes.get("/admin/produtos", produtoController.listarProdutosAdmin);
routes.post("/salvar-produto", produtoController.salvarProduto);

routes.get('/produtos/:id', (req, res) =>{
    if(typeof Number(req.params.id) != "number") {
        return res.send('Deve digitar um numero');
    }

    res.send('Pagina de produtos');
});

module.exports = routes;