/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require('express');
//const adminmiddleWare = require('./adminmiddleWare');
const Controller = require('../controllers/adminController');
const router = express.Router();

router.post('/signin', Controller.adminSignIn);
router.post('/register', Controller.registerAdmin);
// router.get(
// 	'/seed',
// 	expressAsyncHandler(async (req, res) => {
// 		//
// 		const userCreate = await User.insertMany(data.users);
// 		res.send({ userCreate });
// 	})
// );
// router.get('/', adminmiddleWare.isAuth, Controller.getAllUsers);
// router.delete('/:id', adminmiddleWare.isAuth, Controller.deleteUser);
// router.put('/:id', adminmiddleWare.isAuth, Controller.updateUser);
// router.get('/:id', Controller.getUserById);
// router.put('/profile', middleWare.isAuth, Controller.updateUserProfile);
module.exports = router;
