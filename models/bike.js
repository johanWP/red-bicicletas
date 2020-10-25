let Bike = function (id, color, make, location) {
	this.id = id;
	this.color = color;
	this.make = make;
	this.location = location;
}

Bike.prototype.toString = function () {
	return `id: ${this.id}, color: ${this.color}`
	// return "id: " + this.id + ", color: " + this.color;
}

Bike.allBikes = [];

Bike.add = function (aBike) {
	Bike.allBikes.push(aBike);
}

Bike.findById = function (bikeId) {
	let result = Bike.allBikes.find(bike => bike.id == bikeId);
	if (result) {
		return result;
	}

	throw new Error(`Bike with id: ${bikeId} not found`)
}

Bike.delete = function (bikeId) {

	for (let i = 0; i < Bike.allBikes.length; i++) {
		if (Bike.allBikes[i].id == bikeId) {
			Bike.allBikes.splice(i, 1);
			break
		}
	}
}

let a = new Bike(1, 'Green', 'Shimano', [-34.562422, -58.455966]);
let b = new Bike(2, 'White', 'Armstrong', [-34.562422, -58.459410]);

Bike.add(a);
Bike.add(b);
module.exports = Bike;