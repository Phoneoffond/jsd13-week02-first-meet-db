use("sample_mflix");

   db.comments.aggregate([
  {
    $lookup: {
      from: "movies",          // right-hand collection
      localField: "movie_id",  // value present in comments
      foreignField: "_id",     // matching field in movies
      as: "movie"              // new array field to hold matches
    }
  },
  { $unwind: "$movie" },       // flatten the single match
  {
    $project: {                // keep it tidy
      _id: 0,
      text: 1,
      movieTitle: "$movie.title"
    }
  },
  { $limit: 3 }
]);
