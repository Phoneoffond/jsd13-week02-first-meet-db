use("sample_mflix");

db.movies.aggregate([
  {
    $match: {
      $and: [
        { year: { $gte: 2000, $lte: 2009 } },   
        {
          $or: [                               
            { genres: "Drama" },
            { "imdb.rating": { $gte: 7.0 } }
          ]
        }
      ]
    }
  },
  { $limit: 10 },
  { $project: { _id: 0, title: 1, year: 1, genres: 1, "imdb.rating": 1 } }
]);