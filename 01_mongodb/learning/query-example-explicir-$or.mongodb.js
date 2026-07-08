use("sample_mflix");

db.movies.aggregate([
  {
    $match: {
      $or: [
        { languages: "English" },
        { languages: "French" }
      ]
    }
  },
  { $project: { _id: 0, title: 1, languages: 1 } }
]);