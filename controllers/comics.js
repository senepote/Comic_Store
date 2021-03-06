const express = require('express');
const router = express.Router();
const Comics = require('../models/comics.js');
const session = require('express-session');
const Phoenix = require('../models/phoenix.js')
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
      comics: allComics, currentUser: req.session.currentUser
    });
  });
});

//NEW ROUTE
router.get('/new',(req,res)=>{
  res.render('new.ejs');
});
//PHOENIX ROUTE
router.get('/enterthephoenix', (req,res)=>{
  Phoenix.find({}, (err,allPhoenix)=>{
    res.render('phoenix.ejs', {
      phoenix: allPhoenix, currentUser: req.session.currentUser
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
// const comicSeed = require('../models/seed.js')
// router.get('/seed', (req,res)=>{
//   Comics.insertMany(comicSeed, (err, comics)=>{
//     if (err) {console.log(err)} else {
//       res.redirect('/comics')
//     }
//   })
// })
const comicSeed = require('../models/seed.js')
router.get('/seed/newcomics', (req,res)=>{
  Comics.insertMany(comicSeed, (err, comics)=>{
    if (err) {console.log(err)} else {
      res.send(comics)
    }
  })
})
const phoenixSeed = require('../models/phoenix.js')
router.get('/enterthephoenix/seed/newphoenix', (req,res)=>{
  Phoenix.insertMany(phoenixSeed, (err, phoenix)=>{
    if (err) {console.log(err)} else {
      res.send(phoenix)
    }
  })
})

//BUY PROPERTIES
router.put('/:id/buy', (req,res)=>{
  Comics.findByIdAndUpdate(req.params.id, {$inc: { qty: -1 }},
  (err)=>{
    res.redirect('back')
  })
})
//SESSIONS
// router.get('/', (req,res)=>{
//   res.render('index.ejs', {
//     currentUser: req.session.currentUser
//   })
// })
//
// router.get('/app', (req,res)=>{
//   if(req.session.currentUser){
//     res.send('the main');
//   } else {
//     res.redirect('/sessions/new')
//   }
// })

//IMPORTANT
module.exports = router;
