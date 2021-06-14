/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const expressAsyncHandler = require('express-async-handler');
const MenClothes = require('../models/menclothes.model');
const path = require('path');
const multer = require('multer');

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
exports.newMenClothes = (req, res) => {
	console.log('Malik', req.body);
	MenClothes.findOne({ name: req.body.name }, (data) => {
		if (data === null) {
			var str = req.file.path;
			console.log(str);
			str2 = replaceAllBackSlash(str);
			console.log(str2);

			let menclothes = new MenClothes({
				name: req.body.name,
				category: req.body.category,
				price: req.body.price,
				inStock: req.body.inStock,
				brand: req.body.brand,
				size: req.body.size,
				image: str2,
			});
			menclothes.save((err, data) => {
				if (err) return res.json({ Error: err });
				return res.json(data);
			});
		} else {
			return res.json({ message: 'Menclothes already exists' });
		}
	});
};

exports.updateMenClothes = (req, res) => {
	MenClothes.findByIdAndUpdate(
		req.params.id,
		{
			name: req.body.name,
			category: req.body.category,
			price: req.body.price,
			brand: req.body.brand,
			size: req.body.size,
			image: req.file.path,
		},
		(err, menclothes) => {
			if (err) return err;
			res.send('MenClothes is updated');
		}
	);
};

exports.getMenClothes = (req, res) => {
	MenClothes.findById(req.params.id, (err, menclothes) => {
		if (err) return next(err);
		res.send(menclothes);
	});
};

exports.getAllMenClothes = (req, res) => {
	const menlothes = MenClothes.find((err, menclothes) => {
		if (err) return next(err);
		res.send(menclothes);
	});
};

exports.deleteMenClothes = expressAsyncHandler(async (req, res) => {
	const id = req.params.id;
	const menClothes = await MenClothes.findByIdAndRemove(id).exec();
	res.status(200).json(menClothes);
});

exports.getMenProductList = expressAsyncHandler(async (req, res) => {
	const menclothes = await MenClothes.find({});
	res.status(200).send(menclothes);
});

exports.getMenProductById = expressAsyncHandler(async (req, res) => {
	const menclothes = await MenClothes.findById(req.params.id);
	menclothes ? res.status(200).json(menclothes) : res.status(404).json({ message: 'Product not Found!!!' });
});
