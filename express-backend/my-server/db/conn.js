const { MongoClient, ServerApiVersion } = require('mongodb')
const uri =
  "mongodb+srv://doran-jacquelin:8LJhZXIG6lwCmAyO@cluster0.1jaeckw.mongodb.net/UserDB?retryWrites=true&w=majority"
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connection = ''
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db ){
        return callback(err)
      }
    console.log('Successful connection to MongoDB')
    connection = db.db('recipeDB')
    console.log(connection)
    return callback()
  })
  },
  getDB: async function(dbname){
      dbList = await client.db(dbname)
      console.log('Databases:')
      console.log(dbList)
      return dbList
    }
}
