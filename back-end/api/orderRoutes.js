/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const Controller = require('../controllers/orderController');
const middleWare = require('./middleWare');
const adminmiddleWare = require('./adminmiddleWare');

router.get('/', adminmiddleWare.isAuth, Controller.listOrder);
router.delete('/:id', adminmiddleWare.isAuth, Controller.deleteOrder);
router.get('/customer', middleWare.isAuth, Controller.customerOrderList);
router.post('/', middleWare.isAuth, Controller.createOrder);
router.get('/:id', middleWare.isAuth, Controller.getOrderbyId);

module.exports = router;
