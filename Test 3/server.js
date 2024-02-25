/*********************************************************************************
*  WEB322 – Test3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites, GPT) or distributed to other students.
* 
*  Name: Taehwa Hong
* Student ID: 132546227
* Date: Feb 24, 2024
*
********************************************************************************/ 
const express = require("express");
const fs = require("fs");
const app = express();
const port = 8080;

const rawData = fs.readFileSync("./data.json");
const data = JSON.parse(rawData);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to my server!");
});

app.get("/api/data", (req, res) => {
    res.json(data);
});

app.get("/api/data/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log("Requested ID:", id);

    const entry = data.find((item) => item.id === id);

    if (entry) {
        res.json(entry);
    } else {
        res.status(404).json({ error: "CANNOT fine data" });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
