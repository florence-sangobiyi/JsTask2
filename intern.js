var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

function insertMovies (db, client, callback){
  const collection = db.collection('myMovies');
  collection.insertMany([ 
    {movie: "The Banker", year: "2020", rating: 8}, 
    {movie: "Bad Boys", year: "2020", rating: 7}, 
    {movie: "The Hunt", year: "2020", rating: 7},
    {movie: "Bloodshot", year: "2020", rating: 7.5}, 
    {movie: "First Cow", year: "2020", rating: 6.5}
  ], function (err, result){
    if (err) throw err;
    callback(result)
  })
  client.close()
}

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var database = db.db("newdb");
  database.createCollection("interns", function(err, result) {
    if (err) throw err;
    console.log(" interns Collection created!");
  });
  database.createCollection("myMovies", function(err, result) {
    if (err) throw err;
    console.log(" myMovies Collection created!");
  });
  insertMovies(database, db, function(result){
    console.log(result)
  })
});


