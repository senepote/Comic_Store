const express = require('express');
const router = express.Router();
const Comics = require('../models/comics.js');

//SEED
// router.get('/seed/seedingnewcomics', (req,res)=>{
//   const newComics =
//     [
//       {
//         name: 'X-Men #1 (1963)',
//         description: 'The classic that started it all...',
//         img:'https://vignette.wikia.nocookie.net/marvel/images/7/77/X-Men_-1.jpg/revision/latest?cb=20121011154900&path-prefix=fr',
//         price: 300,
//         qty: 1
//       }
//       ,{
//         name:'Uncanny X-Men #1 (2012)',
//         description:'',
//         img:'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/43540/DIG005800_1._SX360_QL80_TTD_.jpg',
//         price:5,
//         qty:5
//       },{
//         name:'Uncanny X-Force # 30 (alt cover)',
//         description:'',
//         img:'https://vignette.wikia.nocookie.net/marveldatabase/images/6/6b/Uncanny_X-Force_Vol_1_35_Simone_Bianchi_Variant.jpg/revision/latest?cb=20121214193122',
//         price:5,
//         qty:5
//       }
//     ]
//     Comics.create(newComics, (err, comics) => {
//       if (err) { console.log(err) }
//       console.log('seeded..redirecting')
//       res.redirect('/comics')
//   })
// })



//INDEX ROUTE
router.get('/',(req,res)=>{
  Comics.find({}, (err,allComics)=>{
    res.render('index.ejs', {
      comics: allComics
    });
  });
});

//SHOW ROUTE
router.get('/:id', (req,res)=>{
  Comics.findById(req.params.id, (err, comics)=>{
    res.render('show.ejs', {
      comics:comics
    })
  })
})

//CREATE ROUTE
router.get('/new',(req,res)=>{
  res.render('new.ejs');
});

//CREATE POST
router.post('/',(req,res)=>{
  Comics.create(req.body, (err, comics)=>{
    res.redirect('/comics/' + comics.id)
  })
})

//EDIT ROUTE
router.get('/:id/edit',(req,res)=>{
  Comics.findById(req.params.id, (err, comics)=>{
    res.render('edit.ejs', {comics: comics})
  })
})
//UPDATE
comics.put('/:id', (req,res)=>{
  Comics.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, comics)=>{
    res.redirect('/comics')
  })
})

//DELETE ROUTE
router.delete('/:id', (req,res)=>{
  Comics.findByIdAndRemove(req.params.id, (err, comics)=>{
    res.redirect('/comics');
  })
})

//ALT SEED
const comicSeed = require('../models/seed.js')
router.get('/seed', (req,res)=>{
  Comics.insertMany(comicSeed, (err, comics)=>{
    if (err) {console.log(err)} else {
      res.redirect('/comics')
    }
  })
})









//IMPORTANT
module.exports = router;
