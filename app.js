const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Wellcome")
});

app.get("/maintenance", (req, res) => {
    res.sendFile(__dirname + "/views/maintenance.html")
});

app.listen(3000, () => console.log("Server running"));
