const mongoose = require('mongoose');
const WomenClothesSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		category: { type: String, required: true },
		price: { type: Number, required: true },
		inStock: { type: Number, required: true },
		brand: { type: String, required: true },
		size: { type: String, required: true },
		image: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('WomenCloth', WomenClothesSchema);
