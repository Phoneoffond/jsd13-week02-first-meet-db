use("sample_mflix");

db.movies.find({ directors: { $in: ["Hal Roach"] } });