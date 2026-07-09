use("sample_mflix");

db.movies.aggregate([
  {
    $match: {
      $and: [
        { year: { $gt: 2010 } },
        { "imdb.rating": { $gte: 8.0 } }
      ]
    }
  },
  { $project: { _id: 0, title: 1, year: 1, "imdb.rating": 1 } }
]);
