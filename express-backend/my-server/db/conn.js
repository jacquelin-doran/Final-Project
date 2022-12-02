const { MongoClient, ServerApiVersion } = require('mongodb')
const uri =
  "mongodb+srv://doran-jacquelin:8LJhZXIG6lwCmAyO@cluster0.1jaeckw.mongodb.net/UserDB?retryWrites=true&w=majority"
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
module.exports = {
  connectToServer: function (callback) {
    client.connect((err) => {
      const collection = client.db().collection("Users")
      console.log('Successful connection to MongoDB')
      // perform actions on the collection object
    })
  },
  getDB: async function(){
      dbList = await client.db().admin().listDatabases()
      console.log("Databases:")
      console.log(dbList.databases)
      return dbList.databases.forEach(db => console.log(` - ${db.name}`))
    }
}
