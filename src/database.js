const mongoose = require("mongoose");

const uri = "mongodb://localhost/burger-queen";
mongoose.connect(uri)
	.then(db => console.log('DB is conected'))
	.catch(err => console.error(err));

module.exports = mongoose;
