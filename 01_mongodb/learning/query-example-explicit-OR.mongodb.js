use("sample_mflix");

db.movies.find(
  {
    $or: [
      { languages: "French" },
      { languages: "Spanish" }
    ]
  },
  { _id: 0, title: 1, languages: 1 }
);
