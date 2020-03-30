var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/newdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var db = db.db("mydb");
  db.createCollection("interns", function(err, result) {
    if (err) throw err;
    console.log(" interns Collection created!");
    db.close();
  });
});