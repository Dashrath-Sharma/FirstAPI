const express = require('express');
const app = express();
const fs = require('fs')

app.get("/api/users", (req, res) => {
    res.send("API working!!");
})
app.get("/api/students", (req, res) => {
    fs.readFile(__dirname+"/"+"student-data.json", "utf-8", (err, data) => {
        res.send(data)
    })
})

app.listen(5001, () => {
    console.log("API runing on port: 5001");
})