const express = require("express");

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/manutencao", (req, res) => {
    res.sendFile(__dirname + "/views/manuntencao.html");
});

app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html");
});

app.listen(3000, () => console.log("Estamos online!"));
