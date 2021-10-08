const express = require('express');
const authorRouter = express.Router();

function routerAuthor(nav,div){

        var authors = [
            {
                title : 'Harry Potter',
                author : 'J K Rowling',
                genre : 'British Author',
                img : "jkrowling.jpg"
               
            },
            {
                title : 'Tom and Jerry',
                author : 'Joseph Barbera',
                genre : 'American animator, director, producer and cartoon artist',
                img : "joseph.jpg"
            },
            {
                title : 'Aadu Jeevitham',
                author : 'Benyamin',
                genre : 'Indian Novelist',
                img : "benyamin.jpg"
            },
            {
                title : 'Othello',
                author : 'William Shakespeare',
                genre : 'English playwright and poet',
                img : "william.jpg"
            },
            {
                title : 'Resurrection',
                author : 'Leo Tolstoy',
                genre : 'Russian Writer',
                img :"tolstoy.jpg"
            }
        ]

        authorRouter.get('/',(req,res)=>{
            res.render("authors",{
                nav,
                div,
                title:'Library',
                authors
            });
        });

        authorRouter.get('/:i',(req,res)=>{
            const is = req.params.i;
            res.render('author',{
                nav,
                div,
                title:'Library',
                author: authors[is]
            });
        });
    return authorRouter;
}

module.exports = routerAuthor;

