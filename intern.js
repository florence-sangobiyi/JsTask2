var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
const {findFirstDocument, findMoviesWithSevenRating, findMoviesTitle} = require('./findintern')
const {updateCollection} = require('./updateintern')

function insertMovies (db, callback){
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
  insertMovies(database, function(result){
    console.log('*'.repeat(80))
    console.log(result)
    console.log('*'.repeat(80))
    findFirstDocument(database, function(firstDocument){
      console.log('*'.repeat(80))
      console.log(firstDocument)
      console.log('*'.repeat(80))
      findMoviesWithSevenRating(database, function(movies){
        console.log('*'.repeat(80))
        console.log(movies)
        console.log('*'.repeat(80))
        findMoviesTitle(database, function(moviesTitle){
          console.log('*'.repeat(80))
          console.log(moviesTitle)
          console.log('*'.repeat(80))
          updateCollection(database, function(document){
             db.close()
          }) 
        })
      })
    })
  })
});


