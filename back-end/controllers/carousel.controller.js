/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Carousel = require('../models/carousel.model');
const path = require('path')
const multer= require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'./uploadCarousel')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});

 exports.uploadImg = multer({storage:storage}).single('image');
exports.newCarousel=(req,res)=>{

Carousel.findOne({name:req.body.name},(data)=>{

if(data===null){

    let carousel=new Carousel({
        name:req.body.name,
        image:req.file.path
       })
       carousel.save((err,data)=>{
           if (err) return res.json({Error:err});
           return res.json(data)
       
       })    
    } else {
        return res.json({message:"Carousel lready exists"})
    }
})
};


exports.updateCarousel=(req,res)=>{

Carousel.findByIdAndUpdate(req.params.id,{

    name:req.body.name,
    image:req.file.path

},(err,carousel)=>{
    if (err) return (err);
    res.send('Carousel is updated')
})
   };


   exports.getCarousel=(req,res)=>{
Carousel.findById(req.params.id, (err,carousel)=>{
    if (err) return next(err);
    res.send(carousel)
}


)

   }

   exports.getAllCarousel=(req,res)=>{
    Carousel.find((err,carousel)=>{
        if (err) return next(err);
        res.send(carousel)
    }
    
    
    )
    
       }
    
   exports.deleteCarousel=(req,res)=>{
    Carousel.findByIdAndRemove(req.params.id,(err)=>{
        if(err) return next(err);
        res.send("Deleted Carousel")
    })
   }