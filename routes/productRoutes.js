const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();
const {isLoggedIn}=require('../middleware');

router.get('/contact',(req,res)=>{
 res.render('contact');
})

router.get("/prices", (req, res) => {
  res.render('products/price');
});



router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.render('products/index', { products });
  }
  catch (e) {
    req.flash('error', 'oops, something went wrong');
    res.redirect('/error');
  }

});

router.get("/products/new", (req, res) => {
  res.render('products/new')
});

router.post("/products",isLoggedIn,async (req, res) => {
  try {
    const newProduct = {
      ...req.body
    };
    await Product.create(newProduct);
    req.flash('success', 'Product Created Successfully');
    res.redirect('/products');
  }
  catch (e) {
    req.flash('error', 'oops, something went wrong');
    res.redirect('/error');
  }

});

router.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
  }
  catch (e) {
    req.flash('error', 'oops, something went wrong');
    res.redirect('/error');
  }

});

router.get("/products/:id/edit",isLoggedIn, async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
  }
  catch (e) {
    req.flash('error', 'oops, something went wrong');
    res.redirect('/error');
  }
});

router.patch("/products/:id",isLoggedIn, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = req.body;
    await Product.findByIdAndUpdate(id, updatedProduct);
    res.redirect(`/products/${id}`);
  }
  catch (e) {
    req.flash('error', 'oops, something went wrong');
    res.redirect('/error');
  }
});

router.delete("/products/:id",isLoggedIn, async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
  }
  catch (e) {
    req.flash('error', 'oops, something went wrong');
    res.redirect('/error');
  }
});

module.exports = router;