const express = require('express');
const router = express.Router();
const Comics = require('../models/comics.js');


//CREATE ROUTE
router.get('/new',(req,res)=>{
  res.render('new.ejs');
});
//DELETE ROUTE

//EDIT ROUTE

//INDEX ROUTE
router.get('/',(req,res)=>{
  Comics.find({}, (err,allComics)=>{
    res.render('index.ejs', {
      comics: allComics
    });
  });
});
// router.get('/', (req,res)=>{
//   res.render('index.ejs')
// })
//SHOW ROUTE

//SEED
// router.get('/seed', (req,res)=>{
//   Comics.create(
//     [
//       {
//         name: 'X-Men #1 (1963)',
//         description: 'The classic that started it all...',
//         img:'https://vignette.wikia.nocookie.net/marvel/images/7/77/X-Men_-1.jpg/revision/latest?cb=20121011154900&path-prefix=fr',
//         price: 300,
//         qty: 1
//       }
//
//     ]
//   )
// });
// const comicSeed = require('../models/seed.js')
// comics.get('/seed/newcomics', (req,res)=>{
//   Comics.insertMany(comicSeed, (err, comics)=>{
//     if (err) {console.log(err)} else {
//       res.send(comics)
//     }
//   })
// })
//








//IMPORTANT
module.exports = router;
