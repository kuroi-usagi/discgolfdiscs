const mongoose = require('mongoose');

const Disc = require('../models/Disc');

const DiscSeed = require('./allDiscs.json');

allDiscs = DiscSeed.map((disc) => {
	return { ...disc };
})
Disc.insertMany(allDiscs)
console.log('Created new discs!');