/* eslint-disable no-undef */
const express=require('express');
const router =express.Router();




const carsoule_controller=require('../controllers/carousel.controller');
router.post('/addCarousel',carsoule_controller.uploadImg,carsoule_controller.newCarousel);
router.put('/:id/updateCarousel',carsoule_controller.uploadImg,carsoule_controller.updateCarousel)
router.get('/:id/Carousel',carsoule_controller.getCarousel)

router.delete('/:id/deleteCarousel',carsoule_controller.deleteCarousel)

router.get('/allCarousel',carsoule_controller.getAllCarousel)
module.exports=router;