const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
 
const app = express();
const port = 4008;
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
 
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1289susha@",
    database: "users",
    multipleStatements: true
});
 
connection.connect((err) => {
    if(!err) {
        console.log("Connected to the database")
    } else {
        console.log(`Error: ${err}`);
    }
})
 
 
// get all users
app.get('/users', (req, res) => {
    connection.query("SELECT * from users", (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
})
 
// get users with a given ID
app.get('/users/:id', (req, res) => {
    connection.query(`SELECT * from users where username="${req.params.id}"`, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
})

// get passwords of users with a given ID
app.get('/users/:id/:p', (req, res) => {
    connection.query(`SELECT * from users where username="${req.params.id}" and password="${req.params.p}"`, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
})



 
// add a new user
app.post('/users', (req, res) => {
    const username=req.body.username;
    const email = req.body.email;
    const password = req.body.password;
 
    connection.query("INSERT INTO users (username, email, password) VALUES (?,?, ?)", [username, email, password], (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    })
})



// update
app.put('/users/:id', (req, res) => {
    const username=req.body.username;
    const email = req.body.email;
    const password = req.body.password;
 
    connection.query(`UPDATE users SET password="${password}" WHERE username=${req.params.id}`, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    })
})
 
//delete
app.delete('/users/:id', (req, res) => {
    connection.query(`DELETE FROM users WHERE username=${req.params.id}`, (err) => {
        if(err) {
            console.log(err);
        } else {
            res.end();
        }
    })
})
 
app.listen(port, () => console.log(`Server started on port ${port}`));