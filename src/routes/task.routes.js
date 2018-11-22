const express = require('express');

//metodo Router que permite agregar rutas
const router = express.Router();

//requerir el modelo de la base de datos
const order = require('../models/task');

// leemos datos
router.get('/', async (req, res) => {
	const orders = await order.find();
	console.log(orders);
	res.json(orders)
	// order.find((err, orders) => {
	// 	console.log(orders);
	// })
	// res.json({
	// 	status: 'API Works!'
	// });
});

// leemos solo una orden
router.get('/:id', async (req, res) => {
	const oneOrder = await order.findById(req.params.id);
	res.json(oneOrder);
});

// agragamos datos
router.post('/', async (req, res) => {
	const { orden, items, name } = req.body;
	const orderN = new order({ orden, items, name });
	await orderN.save();
	res.json({status: 'New order saved'})
});

// actualizamos datos
router.put('/:id', async (req, res) => {
	const { orden, items, name } = req.body;
	const newOrder = { orden, items, name };
	await order.findByIdAndUpdate(req.params.id, newOrder)
	// console.log(req.params.id); // obtiene el id a actualizar
	res.json({status: 'Order Updated'});
});

// eliminar
router.delete('/:id', async (req, res) => {
	await order.findByIdAndDelete(req.params.id);
	res.json({staus: 'Order Deleted'})
});

module.exports = router;