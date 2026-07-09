use("sample_mflix");

db.movies.find({ runtime: { $lt: 60 } }).sort({ runtime: -1 }).limit(5);