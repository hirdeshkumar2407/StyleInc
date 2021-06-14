const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let CarouselSchema = new Schema({
 name:{type:String, require:true},
 image:{type:String, require:true}
});

module.exports=mongoose.model('Carsoule',CarouselSchema);