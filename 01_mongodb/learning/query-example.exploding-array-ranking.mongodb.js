use("sample_mflix");

db.movies.aggregate([
  { $unwind: "$genres" },
  { $sortByCount: "$genres" },   // groups + counts + sorts, all in one
  { $limit: 10 }
]);