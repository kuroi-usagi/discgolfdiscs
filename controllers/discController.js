const express = require('express');
const router = express.Router();
const Disc = require('../models/Disc');

// List all discs
router.get('/', async (req, res, next) => {
	try {
		const disc = await Disc.find({});
		res.json(disc);
	} catch (error) {
		next(error);
	}
});

// List a single discs by id
router.get('/:id', async (req, res, next) => {
	try {
		const disc = await Disc.findById(req.params.id);
		if (disc) {
			res.json(disc);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// Get a single discs by name
router.get('/name/:name', async (req, res, next) => {
	try {
		console.log('Name: ' + req.params.name)
		const disc = await Disc.find({Name: req.params.name});
		console.log(disc.Name)
		if (disc) {
			res.json(disc);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// Get all discs with speed X
router.get('/speed/:speed', async (req, res, next) => {
	try {
		const disc = await Disc.find({Speed: req.params.speed});
		if (disc) {
			res.json(disc);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// Get all discs with glide X
router.get('/glide/:glide', async (req, res, next) => {
	try {
		const disc = await Disc.find({Glide: req.params.glide});
		if (disc) {
			res.json(disc);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// Get all discs with turn X
router.get('/turn/:turn', async (req, res, next) => {
	try {
		const disc = await Disc.find({Turn: req.params.turn});
		if (disc) {
			res.json(disc);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// Get all discs with fade X
router.get('/fade/:fade', async (req, res, next) => {
	try {
		const disc = await Disc.find({Fade: req.params.fade});
		if (disc) {
			res.json(disc);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// Get all discs from manufacturer x 
router.get('/:manufacturer/all', async (req, res, next) => {
	try {
		const disc = await Disc.find({Manufacturer: req.params.manufacturer});
		if (disc) {
			res.json(disc);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// Get all discs from manufacturer x with speed y
router.get('/:manufacturer/speed/:speed', async (req, res, next) => {
	try {
		const disc = await Disc.find({Speed: req.params.speed, Manufacturer: req.params.manufacturer});
		if (disc) {
			res.json(disc);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// Get all discs from manufacturer x with glide y
router.get('/:manufacturer/glide/:glide', async (req, res, next) => {
	try {
		const disc = await Disc.find({Glide: req.params.glide, Manufacturer: req.params.manufacturer});
		if (disc) {
			res.json(disc);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// Get all discs from manufacturer x with turn y
router.get('/:manufacturer/turn/:turn', async (req, res, next) => {
	try {
		const disc = await Disc.find({Turn: req.params.turn, Manufacturer: req.params.manufacturer});
		if (disc) {
			res.json(disc);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// Get all discs from manufacturer x with fade y
router.get('/:manufacturer/Fade/:turn', async (req, res, next) => {
	try {
		const disc = await Disc.find({Fade: req.params.fade, Manufacturer: req.params.manufacturer});
		if (disc) {
			res.json(disc);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});



// // Create a discs
// router.post('/', async (req, res, next) => {
// 	try {
// 		const newDisc = await Disc.create(req.body);
// 		res.status(201).json(newDisc);
// 	} catch (error) {
// 		next(error);
// 	}
// });

// // Update a single discs by id
// router.put('/:id', async (req, res, next) => {
// 	try {
// 		const discToUpdate = await Disc.findByIdAndUpdate(req.params.id, req.body, {
// 			new: true,
// 			overwrite: true,
// 		});
// 		res.json(discToUpdate);
// 	} catch (error) {
// 		next(error);
// 	}
// });

// Delete a discs by id
// router.delete('/:id', async (req, res, next) => {
// 	try {
// 		const deletedDisc = await Disc.findOneAndDelete({
// 			_id: req.params.id,
// 		});
// 		if (deletedDisc) {
// 			res.json(deletedDisc);
// 		} else {
// 			res.sendStatus(404);
// 		}
// 	} catch (error) {
// 		next(error);
// 	}
// });
module.exports = router;
