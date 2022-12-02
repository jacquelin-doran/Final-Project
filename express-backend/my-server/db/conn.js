// const { MongoClient } = require('mongodb')
// const DB = process.env.ATLAS_URI
// const client = new MongoClient(DB, {
//     useNewUrlParser: true,
// })
// .catch((err) => {
//     console.log('error', err)
// })

// var _db

// module.exports = {
//     connectToServer: function (callback){
//         client.connect(function (err, db){
//             if(db){
//                 _db = db.db()
//                 console.log("Successful connection to MongoDB")
//             }
//             return callback(err)
//         })
//     },

//     getDB: function (){
//         return _db
//     }
// }

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://doran-jacquelin:8LJhZXIG6lwCmAyO@cluster0.1jaeckw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
module.exports = {
  connectToServer: function (callback) {
    client.connect((err) => {
      const collection = client.db("test").collection("devices");
      console.log("Successful connection to MongoDB")

      // perform actions on the collection object
      client.close();
    });
  },
};
