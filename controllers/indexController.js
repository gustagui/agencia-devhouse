
const depoimentos = require("../models/depoimentos");

const indexController = {
    exibirHome: (req, res) => {
        res.render("home");
    },

    exibirContato: (req, res) => {
        res.render("contato");
    },

    exibirManutencao: (req, res) => {
        res.render("manutencao");
    },

    exibirBlog:(req, res) => {
        res.render("blog");
    },

    exibirDepoimentos: (req, res) => {    
        res.render("depoimentos", { depoimentos, titulo: "depoimentos" });
    },

    exibirProdutos: (req, res) => {
        res.render("produtos", { produtos, titulo: "produtos"});
    },
    
    receberContato: (req, res) => {
        console.log(req.body);
        res.send("Contato recebido por:" + req.body.name);
    },
};

module.exports = indexController;