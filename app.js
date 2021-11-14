if(process.env.NODE_ENV!=='production'){
  require('dotenv').config();
}

const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const seedDB=require('./seed');
const methodOverride=require('method-override');
const session=require('express-session');
const flash=require('connect-flash');
const passport=require('passport');
const localStrategy=require('passport-local');
const User=require('./models/user');

let data = {
  Header: {
    title: "Kabadi kart",
    paragraph:
      "An initiative for those people who want to sell scrap and for those who want to buy it.",
  },
  About: {
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Why: [
      "Lorem ipsum dolor",
      "Tempor incididunt",
      "Lorem ipsum dolor",
      "Incididunt ut labore",
    ],
    Why2: [
      "Aliquip ex ea commodo",
      "Lorem ipsum dolor",
      "Exercitation ullamco",
      "Lorem ipsum dolor",
    ],
  },
  Services: [
    {
      icon: "fa fa-recycle",
      name: "Recycling of segregated waste",
      text: "To segregate Dry & wet waste, we install an innovative & tech-friendly bins where every information is propagated via our Application system.",
    },
    {
      icon: "fa fa-trash",
      name: "Automated Smart Dustbins",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
      icon: "fa fa-inr",
      name: "Sell your scrap at higher prices",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
      icon: "fa fa-check",
      name: "Waste Audit",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
      icon: "fa fa-search",
      name: "Impact/Sustainability report",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
      icon: "fa fa-tasks",
      name: "Electronic waste management",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
  ],
  Testimonials: [
    {
      img: "img/testimonials/01.jpg",
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
      name: "John Doe",
    },
    {
      img: "img/testimonials/02.jpg",
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
      name: "Johnathan Doe",
    },
    {
      img: "img/testimonials/03.jpg",
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
      name: "John Doe",
    },
    {
      img: "img/testimonials/04.jpg",
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
      name: "Johnathan Doe",
    },
    {
      img: "img/testimonials/05.jpg",
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
      name: "John Doe",
    },
    {
      img: "img/testimonials/06.jpg",
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
      name: "Johnathan Doe",
    },
  ],
  Team: [
    {
      img: "img/team/01.jpg",
      name: "John Doe",
      job: "Director",
    },
    {
      img: "img/team/02.jpg",
      name: "Mike Doe",
      job: "Senior Designer",
    },
    {
      img: "img/team/03.jpg",
      name: "Jane Doe",
      job: "Senior Designer",
    },
    {
      img: "img/team/04.jpg",
      name: "Karen Doe",
      job: "Project Manager",
    },
  ],
  Contact: {
    address: "4321 California St, San Francisco, CA 12345 ",
    phone: "+1 123 456 1234",
    email: "info@company.com",
    facebook: "fb.com",
    twitter: "twitter.com",
    youtube: "youtube.com",
  },
  Features: [
    {
      icon: "fa fa-comments-o",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
    },
    {
      icon: "fa fa-bullhorn",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
    },
    {
      icon: "fa fa-group",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
    },
    {
      icon: "fa fa-magic",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
    },
  ],
  Gallery: [
    { thumb: "img/portfolio/01-small.jpg", title: "Lorem Ipsum1" },
    { thumb: "img/portfolio/02-small.jpg", title: "Lorem Ipsum2" },
    { thumb: "img/portfolio/03-small.jpg", title: "Lorem Ipsum3" },
    { thumb: "img/portfolio/04-small.jpg", title: "Lorem Ipsum4" },
    { thumb: "img/portfolio/05-small.jpg", title: "Lorem Ipsum5" },
    { thumb: "img/portfolio/06-small.jpg", title: "Lorem Ipsum6" },
    { thumb: "img/portfolio/07-small.jpg", title: "Lorem Ipsum7" },
    { thumb: "img/portfolio/08-small.jpg", title: "Lorem Ipsum8" },
    { thumb: "img/portfolio/09-small.jpg", title: "Lorem Ipsum9" }
  ]
};



mongoose.connect(process.env.MONGO_URL)
.then(()=>{
 console.log("DB Connected");
})
.catch((e)=>{
 console.log(e);
});

//seedDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

const sessionConfig={
  secret:'weneedsomebettersecret',
  resave: false,
  saveUninitialized: true
}

app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
  res.locals.success=req.flash('success');
  res.locals.error=req.flash('error');
  res.locals.currentUser=req.user;
  next();
})

const productRoute=require('./routes/productRoutes');
const authRoute=require('./routes/authRoutes');
const cartRoute=require('./routes/cartRoutes');

app.get("/", (req, res) => {
  res.render('home',{data});
});

app.get('/error',(req,res)=>{
 res.render('error');
});

app.get("/aboutPage", (req, res) => {
  res.render('aboutPage',{data});
});

app.use(productRoute);
app.use(authRoute);
app.use(cartRoute);

const port = process.env.PORT || 3000;

app.listen(port,()=>{
 console.log(`Server running on port ${port} 🔥`);
});