let Bike = require('../../models/bike');

exports.index = function (req, res) {
	res.status(200).json({
		bikes: Bike.allBikes
	});
}

exports.store = function (req, res) {
	let newBike = new Bike(req.body.id, req.body.color, req.body.make);
	newBike.location = [req.body.latitude, req.body.longitude];
	Bike.add(newBike);

	res.status(201).json({
		bike: newBike
	})
}

exports.update = function(req, res) {
	let bike = Bike.findById(req.params.id);
	bike.color = req.body.color;
	bike.make = req.body.make;
	bike.location = [req.body.latitude, req.body.longitude];
	res.status(200).json(
		bike
	);
}

exports.delete = function (req, res) {
	const id = req.params.id;
	Bike.delete(id);

	res.status(204).send();
}