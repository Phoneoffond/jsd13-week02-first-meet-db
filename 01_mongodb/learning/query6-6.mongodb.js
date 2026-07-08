use("sample_mflix");

db.movies.find(
{ 
directors: { $in: ["Hal Roach"] } 
}, 
{
title: 1, 
"awards.wins": 1, 
_id: 0 
}
);
