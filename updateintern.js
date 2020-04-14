  function updateCollection (db, callback) {
    const collection = db.collection('myMovies');
    collection.updateOne({movie: "The Banker"}
    , { $set: {movie: "Fifty Shades Of Grey" } }, function(err, result) {
        if (err) throw err
    
        if (result.result.n === 1){
            console.log("Updated the document with the field movies equal to The Banker ");
        }
    
    callback(result);
  });

  }

module.exports = {updateCollection}
