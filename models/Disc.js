const mongoose = require('../db/connection');

const DiscSchema = new mongoose.Schema({
	Manufacturer: String,
	Name: String,
	Speed: Number,
	Glide: Number,
	Turn: Number,
	Fade: Number,
	MaxWeight: String,
	Diameter: String,
	Height: String,
	RimDepth: String,
	InsideRimDiameter: String,
	RimDiamaterRatio: String,
	RimConfiguration: String,
	Flexibility: String
});

const Disc = mongoose.model('Disc', DiscSchema);

module.exports = Disc;
