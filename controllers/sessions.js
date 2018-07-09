const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

router.get('/new', (req,res)=>{
  res.render('sessions/new.ejs')
})

router.post('/', (req,res)=>{
  User.findOne({ username: req.body.username}, (err, foundUser)=>{
    if(req.body.password == foundUser.password){
      res.session.currentUser = foundUser;
      res.redirect('/comics');
    } else {
      res.send('wrong password')
    }
  })
})

module.exports = router;
