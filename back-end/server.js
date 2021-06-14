/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./api/userRoutes');
const adminRouter = require('./api/adminRoutes');
const carouselRouter = require('./api/carousel.route');
const menClothesRouter = require('./api/menclothes.route');
const womenClothesRouter = require('./api/womenclothes.route');
const orderRouter = require('./api/orderRoutes');
const productRouter = require('./api/productRoutes');
const cors = require('cors');
const app = express();

mongoose
	.connect('mongodb+srv://usama:12345@cluster0.lua9i.mongodb.net/eva?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log('Connected to DataBase'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/admins', adminRouter);
app.use('/api/orders', orderRouter);
app.use('/api/menclothes', menClothesRouter);
app.use('/api/products', productRouter);
app.use('/api/womenclothes', womenClothesRouter);

app.use('/api/carousel', carouselRouter);
app.get('/', (req, res) => {
	res.send('Server is working');
});
app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

//const port = process.env.PORT || 5000;

app.listen(5000, () => {
	console.log('Server is running on http://localhost:5000/');
});
