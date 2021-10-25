const express = require('express');
const booksadminRouter = express.Router();
const Bookdata = require('../../model/Bookdata');
const upload = require('../multer');

function router(adm,opt){   

    booksadminRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("booksadmin",{
                adm,
                opt,
                title:'Library',
                books
            });
       });
    });
    
    //accessing value of i from url
    booksadminRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render('booksingle',{
                adm,
                opt,
                title:'Library',
                book
            });
        });
        
    });

    booksadminRouter.get('/booksingle/:id/delete',(req,res,next)=>{
       const id = req.params.id;
       console.log(id);

       Bookdata.findByIdAndRemove(id)
       .then(()=>{
           res.redirect('/booksadmin');
       })
    });

    booksadminRouter.put('/:id/edit', upload , async (req,res)=>{
        try{ 
            const book =await Bookdata.findById(req.params.id);
            book.title = req.body.title;
            book.author = req.body.author;
            book.genre = req.body.genre;
            book.image = req.file.filename;
            book.save();
            res.render('booksingle',{
                adm,
                opt,
                title:'Library',
                book :book
            });
        }catch{
            res.redirect('/booksadmin');
        }
    });

    booksadminRouter.post('/booksingle/:id/update', upload ,(req,res,next)=>{
        const id = req.params.id;
        Bookdata.findByIdAndUpdate(id , req.body , (err,book)=>{
            console.log(book);
            if(err){
                console.log('Something went wrong');
                next(err);
            }else{
                console.log('Success');
                res.render('addBookadmin',{
                    adm,
                    opt,
                    title:'Library',
                    book
                });
            }
        });
    });
    
    return booksadminRouter;
}


//exporting booksRouter
module.exports = router;