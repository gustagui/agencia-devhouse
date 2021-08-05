const express = require("express");
const path = require("path");
const depoimentos = require("../models/depoimentos");
const produtos = require("../models/produtos");
const routes = express.Router();


routes.get("/produtos/lista", (req, res) => {
    res.send("Página de produtos");
});

routes.get("/", (req, res) => {
    res.render("home");
});

routes.get("/home", (req, res) => {
    res.render("home");
});

routes.get("/contato", (req, res) => {
    res.render("contato");
});

routes.get("/blog", (req, res) => {
    res.render("blog");
});

routes.get("/manutencao", (req, res) => {
    res.render("manutencao");
});

routes.get("/produtos", (req, res) => {
    res.render("produtos", { produtos, titulo: "produtos"});
});

routes.get("/depoimentos", (req, res) => {    
    res.render("depoimentos", { depoimentos, titulo: "depoimentos" });
});


routes.post('/receber-contato', (req, res) => {
    console.log(req.body);
    res.send("Contato recebido por:" + req.body.name);
});


module.exports = routes;
