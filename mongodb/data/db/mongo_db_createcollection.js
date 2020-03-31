var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var database = db.db("newdb");
  database.createCollection("interns", function(err, result) {
    if (err) throw err;
    console.log(" interns Collection created!");
  });
  db.close();
});