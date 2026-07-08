use("sample_mflix");

db.movies.find({ cast: "Roy L. McCardell" }).count();
