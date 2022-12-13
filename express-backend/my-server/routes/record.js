// recordRoutes is an instance of the express router.
const express = require('express')
const router = express.Router()
const dbo = require("../db/conn")
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId
 
 
// This section will help you get a list of all the records.
router.get('/', async function (req, res) {
 const db_connect = await dbo.getDB('recipeDB')
 console.log("GET")
 console.log(db_connect)
 //  db_connect.find().toArray(function (err, result) {
//      if (err) throw err
//      res.json(result)
//    })
})
 
// This section will help you get a single record by id
router.get('/recipe/:id' , function (req, res) {
 let db_connect = dbo.getDB()
 let myquery = { _id: ObjectId(req.params.id) }
 db_connect
   .collection('recipe')
   .findOne(myquery, function (err, result) {
     if (err) throw err
     res.json(result)
   })
})
 
module.exports = router