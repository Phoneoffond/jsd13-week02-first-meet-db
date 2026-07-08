use("sample_mflix");

db.movies.find({ directors: "Hal Roach" }).count();