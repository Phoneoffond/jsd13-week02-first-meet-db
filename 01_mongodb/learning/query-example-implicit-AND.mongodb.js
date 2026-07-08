use("sample_mflix");

db.movies.find(
  {
    year: 1995,              // condition #1
    genres: "Action"         // condition #2  → implicit AND
  },
  { _id: 0, title: 1, year: 1, genres: 1 }   // projection
);
