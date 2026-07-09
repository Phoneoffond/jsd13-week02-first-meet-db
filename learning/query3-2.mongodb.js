use("sample_mflix");

db.theaters.find({ "location.address.city": "La Quinta" }).count()
