const express=require('express');
const router=express.Router();
const User=require('../models/user');
const Product=require('../models/productModel');
const {isLoggedIn}=require('../middleware');

router.post("/cart/:productId/add",isLoggedIn, async(req, res) => {
  const {productId}=req.params;

  const product=await Product.findById(productId);
  
  const currentUser=req.user;
  currentUser.cart.push(product);
  await currentUser.save();
  req.flash('success','Item added to your cart successfully!!');
  res.redirect(`/products/${productId}`);
});

router.get("/user/cart", async(req, res) => {
    const userid=req.user._id;
    const user=await User.findById(userid).populate('cart');
    res.render('cart/userCart',{user});
});

router.delete('/cart/:id/remove',isLoggedIn,async(req,res)=>{
  try{
    const productid=req.params.id;
    const userid=req.user._id;
    await User.findByIdAndUpdate(userid,{$pull:{cart:productid}});
    res.redirect('/user/cart');
  }
  catch(e){
    res.render('error');
  }
});




module.exports=router;