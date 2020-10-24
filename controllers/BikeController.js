var Bike = require('../models/bike')

exports.index = function (req, res) {
	res.render('../views/bikes/index', {bikes: Bike.allBikes});
}

exports.create = function (req, res) {
	res.render('../views/bikes/create');
}
exports.store = function (req, res) {
	const id = Bike.allBikes.length + 1;
	const location = [req.body.longitude, req.body.latitude];
	var newBike = new Bike(id, req.body.color, req.body.make, location);
	Bike.add(newBike);

	res.redirect('/bikes')
}
exports.edit = function (req, res) {
	let bike = Bike.findById(req.params.id);
	res.render('../views/bikes/edit', {bike})
}

exports.update = function (req, res) {
	let bike = Bike.findById(req.params.id);
	bike.color = req.body.color;
	bike.make = req.body.make;
	bike.location = [req.body.longitude, req.body.latitude];

	res.redirect('/bikes')
}

exports.delete = function (req, res) {
	const id = req.params.id;
	Bike.delete(id);

	res.redirect('/bikes')
}