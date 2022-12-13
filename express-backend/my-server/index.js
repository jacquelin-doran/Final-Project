const express = require('express')
const cors = require('cors')
const path = require('path')
const puppeteer = require('puppeteer')
const FileSaver = require('file-saver')
const DOMParser = require('dom-parser')

//Routes
const users = require('./routes/users')
const records = require('./routes/record')
const RecipeDB = require('./db/recipeDB')

//DB setup
const mongoose = require('mongoose')
require('dotenv').config({path: './config.env'})
const db = require('./db/conn')
const { text } = require('express')
const { parse } = require('path')
const { table } = require('console')

//App setup
const app = express()
const port = 3002

app.use(cors())
app.use(express.json())

//Routes
app.use('/users', users)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//This is supposed to set up a way to capture the data that will go to and from mongoDB
// const schema = new mongoose.Schema({
//     title:String,
//     ingredients:String,
//     directions:String
// })

// const dataTable = mongoose.model('Recipies', schema)

// const fetchData = function(callback){
//     const tabledata = dataTable.find({})
//     tabledata.exec(function(err, data){
//         if(err) throw err;
//         return callback(data)
//     })
// }


//Create filepath, create a browser, open puppeteerm go to url, save and scrub the content
const textToList = async (url, name) => {
    const filepath = path.join(__dirname, `${name}.json`)
    console.log(url)
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const URL = `https://cookieandkate.com/search/?q=${url}`
    await page.goto(url)
    const ingredients = await page.$eval(('div.tasty-recipe-ingredients'), (element) => element.innerHTML)
    const directions = await page.$eval(('div.tasty-recipe-instructions'), (element) => element.innerHTML)
    const scrubbedContent = content.replace('/\s+', " ").trim()
    await browser.close()
    parsePage(ingredients)
    parsePage(directions)
    return scrubbedContent
    //$eval can be changed to get something more specific
}

const parsePage = async (content) => {
    const scrubbedContent = content.replace('/\s+', " ").trim()
    console.log('in parse page')
    const parser = new DOMParser()
    var document = parser.parseFromString(content, "text/html")
    console.log(document)
}

app.post('/get_text', async (req, res)=> {
    let {url, name} = req.body
    console.log('in post')
    res.send(await textToList(url, name))
})

app.get('/recipes', async (req, res) => {
    res.json(await RecipeDB.recipes())
    console.log("Recipe")
})

app.post('/recipes', async (req, res) => {
    console.log("adding a recipe")
    console.log(req.body)
    if(req.body == undefined){
        res.status(500)
        res.send({message: 'Post request failed'})
    }
    else {
        RecipeDB.insertRecipe(req.body).then((data) => {
            res.json(data)
        })
    }
})

app.listen(port, () => {
    db.connectToServer(function (err) {
        if (err) console.log(err)
    })
    console.log(`Express Backend listening at http://localhost:${port}`)
})