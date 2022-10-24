const express = require('express')
import bodyParser = require("body-parser")
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    dbName: 'mainDB'
})

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(3001, () => {

}) // port for server

