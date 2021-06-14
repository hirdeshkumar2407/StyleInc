/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const womenclothes_controller = require('../controllers/womenclothes.controller');
const WomenClothes = require('../models/womenclothes.model');

router.get('/', womenclothes_controller.getWomenProductList);
router.get('/:id', womenclothes_controller.getWomenProductById);
router.post('/addwomenclothes', womenclothes_controller.uploadImg, womenclothes_controller.newWomenClothes);
router.put('/:id/updateWomenClothes', womenclothes_controller.uploadImg, womenclothes_controller.updateWomenClothes);
router.get('/:id/WomenClothes', womenclothes_controller.getWomenClothes);

router.delete('/:id/deleteWomenClothes', womenclothes_controller.deleteWomenClothes);


router.get('/allWomenClothes', womenclothes_controller.getAllWomenClothes);
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
router.put('/updateWomenClothes', womenclothes_controller.uploadImg, async (req, res) => {
	const id = req.body.id;
	const name = req.body.name;
	const category = req.body.category;
	const price = req.body.price;
	const inStock = req.body.inStock;
	const brand = req.body.brand;
	const size = req.body.size;
	const image = req.file.path;
	var image2 = replaceAllBackSlash(image);
	console.log(image2);
	try {
		await WomenClothes.findById(id, (err, update) => {
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
