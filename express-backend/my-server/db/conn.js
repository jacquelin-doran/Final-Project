const { MongoClient, ServerApiVersion } = require('mongodb')
const uri =
  "mongodb+srv://doran-jacquelin:8LJhZXIG6lwCmAyO@cluster0.1jaeckw.mongodb.net/UserDB?retryWrites=true&w=majority"
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db ){
        return callback(err)
      }
    console.log('Successful connection to MongoDB')
    var database = db.db('recipeDB')
  })
  },
  getDB: async function(dbname){
      dbList = await client.db(dbname).collection('recipes')
      console.log('Databases:')
      console.log(dbList)
      return dbList
    }
  // findCollections: function(db, callback){
  //   const collection = db.db('recipeDB')
  //   collection.collection('recipe')
  //   collection.find().toArray(function(err, docs) {
  //     if (err) throw err
  //     console.log(docs)
  //     callback;
  //   })
  // }
}
