const express = require('express');
const router = express.Router();
const Comics = require('../models/comics.js');

//SEED
//JSON
router.get('/json', (req,res) =>{
  Comics.find({}, (err, allComics)=>{
    res.send(allComics)
  })
})

//INDEX ROUTE
router.get('/',(req,res)=>{
  Comics.find({}, (err,allComics)=>{
    res.render('index.ejs', {
      comics: allComics
    });
  });
});

//NEW ROUTE
router.get('/new',(req,res)=>{
  res.render('new.ejs');
});

//SHOW ROUTE
router.get('/:id', (req,res)=>{
  Comics.findById(req.params.id, (err, comics)=>{
    res.render('show.ejs', {
      comics:comics
    })
  })
})

//CREATE POST
router.post('/',(req,res)=>{
  Comics.create(req.body, (err, comics)=>{
    res.redirect('/comics' + comics.id)
  })
})

//EDIT ROUTE
router.get('/:id/edit',(req,res)=>{
  Comics.findById(req.params.id, (err, comics)=>{
    res.render('edit.ejs', {comics: comics})
  })
})

//UPDATE // PUT
router.put('/:id', (req,res)=>{
  Comics.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, comics)=>{
    res.redirect('/comics/' + comics.id)
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

// router.post('/', (req,res) =>{
//   console.log(req.body);
//   let newComic = {}
// })



//IMPORTANT
module.exports = router;
