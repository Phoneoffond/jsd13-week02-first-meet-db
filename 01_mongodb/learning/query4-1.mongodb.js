use("sample_mflix");

db.movies.find({ plot: { $regex: "American", $options: "i" } }).count();