const mongoose = require('mongoose');
const { Schema } = mongoose;

// Como van a lucir los datos
const schemaOrder = new Schema({
	orden: {type: Number, required: true},
	items: {type: Array, required: true},
	name: {type: String, required: true}
});

// como voy a reutilizarlo
module.exports = mongoose.model('order', schemaOrder )