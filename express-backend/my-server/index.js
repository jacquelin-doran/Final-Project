// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
const express = require('express')
const mongoose = require('mongoose')
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
    res.send('Hello World!')
})

//SCHEMA
const sch={
    name:String,
    email:String,
    id:Number
}

app.post('/post', async(req, res) => {
    console.log("inside post function")
    const data = {
        name: req.body.name,
        email: req.body.email,
        id: req.body.id
    }
    const val = await data.save()
    res.json(val)
})

app.listen(port, () => {
    db.connectToServer(function (err) {
        if (err) console.log(err)
    })
    db.getDB()
    console.log(`Express Backend listening at http://localhost:${port}`)
})