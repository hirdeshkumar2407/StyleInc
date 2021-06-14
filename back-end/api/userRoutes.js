/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require('express');
const middleWare = require('./middleWare');
const Controller = require('../controllers/userController');
const adminmiddleWare = require('./adminmiddleWare');
const router = express.Router();

const {addUserValidaion}=require('../models/validation/user.validate')
// router.get(
// 	'/seed',
// 	expressAsyncHandler(async (req, res) => {
// 		//
// 		const userCreate = await User.insertMany(data.users);
// 		res.send({ userCreate });
// 	})
// );
router.get('/', adminmiddleWare.isAuth, Controller.getAllUsers);
router.delete('/:id', adminmiddleWare.isAuth, Controller.deleteUser);
router.put('/:id', adminmiddleWare.isAuth, Controller.updateUser);
router.post('/signin', addUserValidaion,Controller.userSignIn);
router.post('/register', addUserValidaion,Controller.registerUser);
router.get('/:id', Controller.getUserById);
router.put('/profile', middleWare.isAuth, Controller.updateUserProfile);
module.exports = router;
