const express = require('express');
const authorRouter = express.Router();
const Authordata = require('../model/Authordata');


function routerAuthor(nav,div){

        authorRouter.get('/',(req,res)=>{
            Authordata.find()
            .then(function(authors){

                res.render("authors",{
                    nav,
                    div,
                    title:'Library',
                    authors
                });
            });
        });

        //accessing value of i from url
        authorRouter.get('/:id',(req,res)=>{
            const id = req.params.id;
            Authordata.findOne({_id: id})
            .then(function(author){
                res.render('author',{
                    nav,
                    div,
                    title:'Library',
                    author
                });
            });
        });
    return authorRouter;
}

module.exports = routerAuthor;

