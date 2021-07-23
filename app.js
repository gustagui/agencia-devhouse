const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/contato", (req, res) => {
    res.sendFile(__dirname + "/views/contato.html");
});

app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html");
});

app.get("/manutencao", (req, res) => {
    res.sendFile(__dirname + "/views/manuntencao.html");
});

app.post('/receber-contato', (req, res) => {
    console.log(req.body);
    res.send("Contato recebido");
});

app.listen(3000, () => console.log("Estamos online!"));
