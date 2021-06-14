/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const WomenClothes = require('../models/womenclothes.model');
const path = require('path');
const multer = require('multer');
const expressAsyncHandler = require('express-async-handler');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'D:\\Git\\Submission_Project\\Final_web_Project\\Final_web_Project\\FinalWebTech\\front-end\\public\\images');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});
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
exports.uploadImg = multer({ storage: storage }).single('image');
exports.newWomenClothes = (req, res) => {
	console.log(req.body);
	WomenClothes.findOne({ name: req.body.name }, (data) => {
		if (data === null) {
			var str = req.file.path;
			console.log(str);
			str2 = replaceAllBackSlash(str);
			console.log(str2);
			let womenclothes = new WomenClothes({
				name: req.body.name,
				category: req.body.category,
				price: req.body.price,
				inStock: req.body.inStock,
				brand: req.body.brand,
				size: req.body.size,
				image: str2,
			});
			womenclothes.save((err, data) => {
				if (err) return res.json({ Error: err });
				return res.json(data);
			});
		} else {
			return res.json({ message: 'Womenclothes already exists' });
		}
	});
};

exports.updateWomenClothes = (req, res) => {
	WomenClothes.findByIdAndUpdate(
		req.params.id,
		{
			name: req.body.name,
			category: req.body.category,
			price: req.body.price,
			brand: req.body.brand,
			size: req.body.size,
			image: req.file.path,
		},
		(err, womenclothes) => {
			if (err) return err;
			res.send('Women Clothes is updated');
		}
	);
};

exports.getWomenClothes = (req, res) => {
	WomenClothes.findById(req.params.id, (err, womenclothes) => {
		if (err) return next(err);
		res.send(womenclothes);
	});
};

exports.getAllWomenClothes = (req, res) => {
	WomenClothes.find((err, womenclothes) => {
		if (err) return next(err);
		res.send(womenclothes);
	});
};

exports.deleteWomenClothes = expressAsyncHandler(async (req, res) => {
	const id = req.params.id;
	const womenClothes = await WomenClothes.findByIdAndRemove(id).exec();
	res.status(200).json(womenClothes);
});

exports.getWomenProductList = expressAsyncHandler(async (req, res) => {
	const womenclothes = await WomenClothes.find({});
	res.status(200).json(womenclothes);
});

exports.getWomenProductById = expressAsyncHandler(async (req, res) => {
	const womenclothes = await WomenClothes.findById(req.params.id);
	if (womenclothes) {
		res.status(200).json(womenclothes);
	} else {
		res.status(404).json({ message: 'Product not Found!!!' });
	}
});
