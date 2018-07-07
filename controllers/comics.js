const express = require('express');
const router = express.Router();
const Comics = require('../models/comics.js');

//SEED
// router.get('/seed', (req,res)=>{
//   Comic.create(
//     [
//       {
//         name: 'X-Men #1 (1963)',
//         description: 'The classic that started it all...',
//         img:'https://vignette.wikia.nocookie.net/marvel/images/7/77/X-Men_-1.jpg/revision/latest?cb=20121011154900&path-prefix=fr',
//         price: 300,
//         qty: 1
//       },{
//         name:
//         description:
//         img:
//         price:
//         qty:
//       },{
//         name:
//         description:
//         img:
//         price:
//         qty:
//       },{
//         name:
//         description:
//         img:
//         price:
//         qty:
//       },{
//         name:
//         description:
//         img:
//         price:
//         qty:
//       },{
//         name:
//         description:
//         img:
//         price:
//         qty:
//       },{
//         name:
//         description:
//         img:
//         price:
//         qty:
//       },{
//         name:
//         description:
//         img:
//         price:
//         qty:
//       },{
//         name:
//         description:
//         img:
//         price:
//         qty:
//       },{
//         name:
//         description:
//         img:
//         price:
//         qty:
//       },{
//         name:
//         description:
//         img:
//         price:
//         qty:
//       }
//     ]
//   )
// })


//CREATE ROUTE
router.get('/comics/new',(req,res)=>{
  res.render('new.ejs');
});
//DELETE ROUTE

//EDIT ROUTE

//INDEX ROUTE
// router.get('/',(req,res)=>{
//   Comic.find({}, (err,allComics)=>{
//     res.render('index.ejs', {
//       comic: allComics
//     });
//   });
// });
router.get('/', (req,res)=>{
  res.render('index.ejs')
})
//SHOW ROUTE










//IMPORTANT
module.exports = router;
