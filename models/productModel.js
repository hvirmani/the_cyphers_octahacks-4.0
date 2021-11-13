const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
 name:{
  type:String,
  trim:true,
  require:true
 },
 image:{
  type:String,
 },
 category:{
    type:String,
    require:true,
 },
 weight:{
   type:String,
   require:true,
 },
 phone:{
   type:String,
   require:true,
 },
 address:{
   type:String,
   require:true,
 }
});


const Product=mongoose.model('Product',productSchema);

module.exports=Product;