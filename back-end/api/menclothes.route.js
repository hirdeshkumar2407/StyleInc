/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const menclothes_controller = require('../controllers/menclothes.controller');
const MenClothes = require('../models/menclothes.model');
router.get('/', menclothes_controller.getMenProductList);
router.get('/:id', menclothes_controller.getMenProductById);
router.post('/addmenclothes', menclothes_controller.uploadImg, menclothes_controller.newMenClothes);
router.put('/:id/updateMenClothes', menclothes_controller.uploadImg, menclothes_controller.updateMenClothes);
router.get('/:id/MenClothes', menclothes_controller.getMenClothes);
router.delete('/:id/deleteMenClothes', menclothes_controller.deleteMenClothes);
router.get('/allMenClothes', menclothes_controller.getAllMenClothes);
function replaceAllBackSlash(targetStr) {
	var index = targetStr.indexOf('\\');
	while (index >= 0) {
		targetStr = targetStr.replace('\\', '');
		index = targetStr.indexOf('\\');
	}
	var targetStr2;
	targetStr2 = targetStr.replace('D:GitSubmission_ProjectFinal_web_ProjectFinal_web_ProjectFinalWebTechfront-endpublicimages', '');
	console.log(targetStr2);
	var targetStr3 = '/images/';
	targetStr3 = targetStr3.concat(targetStr2);
	return targetStr3;
}

router.put('/updateMenClothes', menclothes_controller.uploadImg, async (req, res) => {
	console.log(req.body);
	const id = req.body.id;
	const name = req.body.name;
	const category = req.body.category;
	const price = req.body.price;
	const inStock = req.body.inStock;
	const brand = req.body.brand;
	const size = req.body.size;
	const image = req.file.path;
	console.log(image);
	var image2=replaceAllBackSlash(image);
	console.log(image2);

	try {
		
		await MenClothes.findById(id, (err, update) => {
			update.name = name;
			update.category = category;
			update.price = price;
			update.inStock = inStock;
			update.brand = brand;
			update.size = size;
			update.image = image2;
			update.save();
			res.send('Updated.');
		});
	} catch (err) {
		console.log(err);
	}
});
module.exports = router;
