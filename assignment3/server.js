/********************************************************************************

* WEB322 – Assignment 03

* 

* I declare that this assignment is my own work in accordance with Seneca's

* Academic Integrity Policy:

* 

* https://www.senecacollege.ca/about/policies/academic-integrity-policy.html

* 

* Name: Taehwa Hong Student ID: 132546227 Date: March 16, 2024

*

* Published URL: ___________________________________________________________

*

********************************************************************************/

const express = require('express');
const app = express();
const path = require('path');

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'MyServer', 'views', 'home.html'));
});


app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'MyServer', 'views', 'about.html'));
});


app.get('/lego/sets', (req, res) => {
    const theme = req.query.theme;
    if (theme) {
        res.send(`Lego sets for theme ${theme}`);
    } else {
        res.send('All Lego sets');
    }
});

app.get('/lego/sets/:set_num', (req, res) => {
    const setNum = req.params.set_num;
    res.send(`Lego set with set_num ${setNum}`);
});


app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'MyServer', 'views', '404.html'));
});


app.listen(HTTP_PORT, () => {
    console.log(`Server listening on port ${HTTP_PORT}`);
});
