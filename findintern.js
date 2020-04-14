function findFirstDocument (db,callback) {
    const collection = db.collection("myMovies");
    collection.findOne({} , function(err,document) {
        if (err) throw err
    callback(document);
    })
};
function findMoviesWithSevenRating (db,callback) {
    const collection = db.collection("myMovies");
    collection.find({rating: {$eq: 7}}).toArray(function(err,docs){
        if (err) throw err
        callback(docs);
    })
};

function findMoviesTitle (db,callback){
    const collection = db.collection("myMovies");
    collection.find({}).project({movie: 1, '_id': 0}).toArray(function(err,docs){
        if (err) throw err
        callback(docs);
    })
}


module.exports = {findFirstDocument, findMoviesWithSevenRating, findMoviesTitle}

