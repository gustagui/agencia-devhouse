const express = require("express");
const path = require("path");
const produtos = require("../models/produtos");
const routes = express.Router();

const indexController = require('../controllers/indexController');



routes.get("/", indexController.exibirHome);
routes.get("/home", indexController.exibirHome);

routes.get("/contato", indexController.exibirContato);

routes.get("/blog", indexController.exibirBlog);

routes.get("/manutencao", indexController.exibirManutencao);

routes.get("/depoimentos", indexController.exibirDepoimentos);


routes.post('/receber-contato', indexController.receberContato);


module.exports = routes;
