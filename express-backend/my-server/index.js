// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
const express = require('express')
const users = require('./routes/users')
const records = require('./routes/record')
const cors = require('cors')
require('dotenv').config({path: './config.env'})
const app = express()
const port = 3002
const db = require('./db/conn')


// app.use(function (req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
//     res.setHeader("Access-Control-Allow-Headers", "content-type")
//     next();
// });

app.use(cors())

app.use(express.json())

app.use('/record', records)

app.use('/users', users)

app.get('/', (req, res) => {
    res.send('Hello Worl!')
})

app.listen(port, () => {
    db.connectToServer(function (err) {
        if (err) console.log(err)
    })
    console.log(`Express Backend listening at http://localhost:${port}`)
})