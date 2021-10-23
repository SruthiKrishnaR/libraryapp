const express = require('express');
const authoradminRouter = express.Router();
const Authordata = require('../../model/Authordata');
const upload = require('../multer');



function routerAuthor(adm,opt){

        authoradminRouter.get('/',(req,res)=>{
            Authordata.find()
            .then(function(authors){

                res.render("authorsadmin",{
                    adm,
                    opt,
                    title:'Library',
                    authors
                });
            });
        });

        //accessing value of i from url
        authoradminRouter.get('/:id',(req,res)=>{
            const id = req.params.id;
            Authordata.findOne({_id: id})
            .then(function(author){
                res.render('authorsingle',{
                    adm,
                    opt,
                    title:'Library',
                    author
                });
            });
        });

        authoradminRouter.get('/authorsingle/:id/delete',(req,res,next)=>{
            const id = req.params.id;
            console.log(id);
     
            Authordata.findByIdAndRemove(id)
            .then(()=>{
                res.redirect('/authorsadmin');
            });
         });
         
        authoradminRouter.post('/authorsingle/:id/update', upload,(req,res,next)=>{
            const id = req.params.id;
            
            Authordata.findByIdAndUpdate(id , req.body , (err,docs)=>{
                console.log(docs);
                if(err){
                    console.log('Something went wrong');
                    next(err);
                }else{
                    console.log('Success');
                    res.render('addAuthadmin',{
                        adm,
                        opt,
                        title:'Library',
                        docs
                    })
                    
                }
            })
        })

    return authoradminRouter;
}

module.exports = routerAuthor;

