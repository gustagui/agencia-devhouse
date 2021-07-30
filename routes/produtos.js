const express = require("express");

const routes = express.Router();


routes.get("/produtos/lista", (req, res) => {
    res.send("Página de produtos");
});

routes.get("/produtos/:marca/:tamanho/:preco", (req, res) => {
    console.log(req.params.name);
    res.send("Página de produtos");
});


module.exports = routes;
