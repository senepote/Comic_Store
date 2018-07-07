const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');

const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';
const db = mongoose.connection;

//MIDDLEWARE
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
// app.use(express.json());

const comicController = require('./controllers/comics.js');
app.use('/comics', comicController);
// app.get('/comics/new', (req,res)=>{
//   res.render('new.ejs')
// })
app.get('/', (req,res)=>{
  res.render('index.ejs')
})



app.listen(PORT, ()=>{
  console.log('listening...');
})


mongoose.connect(mongoUri);
mongoose.connection.on('open', ()=>{
  console.log('mongoose connected!!!!!!!');
})
