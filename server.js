const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');
const session = require('express-session');
const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';
const db = mongoose.connection;
//SESSIONS
app.use(session({
  secret: "purplemonkeydishwasher",
  resave: false,
  saveUninitialized: false
}));
//MIDDLEWARE
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.json());


//CONTROLLER FILE
const comicController = require('./controllers/comics.js');
app.use('/comics', comicController);
const userController = require('./controllers/users.js')
app.use('/users', userController);
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

app.get('/',(req,res)=>{
  res.redirect('/comics')
})

app.listen(PORT, ()=>{
  console.log('listening...');
})
//SESSIONS
app.get('/', (req, res)=>{
    res.render('index.ejs', {
        currentUser: req.session.currentUser
    });
});

app.get('/app', (req,res)=>{
  if(req.session.currentUser){
    res.send('the main');
  } else {
    res.redirect('/sessions/new')
  }
})

mongoose.connect(mongoUri);
mongoose.connection.on('open', ()=>{
  console.log('mongoose connected!!!!!!!');
})
