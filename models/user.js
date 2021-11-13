const mongoose=require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');


//passport local mongoose automatically creates username and password in userSchema as it is self understood for authentication
const userSchema=new mongoose.Schema({
 email:{
  type:String,
  required:true,
  unique:true,
  trim:true
 },
 cart:[
     {
         type:mongoose.Schema.Types.ObjectId,
         ref:'Product'
     }
 ]
});

userSchema.plugin(passportLocalMongoose);

const User=mongoose.model('User',userSchema);

module.exports=User;