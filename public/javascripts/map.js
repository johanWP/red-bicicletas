var mymap = L.map('main_map').setView([-34.562422, -58.462166], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	minZoom: 1,
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1Ijoiam1hcmNoYW4iLCJhIjoiY2tnY2p6dmJ1MDJlNDJzcDdrNWExNnNqbSJ9.dHHt3LVgrDJp3P6lxTRhQQ'
}).addTo(mymap);

// var marker = L.marker([-34.562422, -58.463166]).addTo(mymap);
// var marker2 = L.marker([-34.562422, -58.458166]).addTo(mymap);

$.ajax({
	method: 'get',
	url: 'api/bikes',
	dataType: 'json',
	success: function(result) {
		result.bikes.forEach(bike => {
			L.marker(bike.location, {title: bike.id}).addTo(mymap);
		});
	}
});