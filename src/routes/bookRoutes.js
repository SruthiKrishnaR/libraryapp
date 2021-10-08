const express = require('express');
const booksRouter = express.Router();

function router(nav,div){

    var books = [
        {
            title : 'Harry Potter',
            author : 'J K Rowling',
            genre : 'Fantacy Fiction',
            img : "harrypotter.jpg"
        },
        {
            title : 'Tom and Jerry',
            author : 'Joseph Barbera',
            genre : 'Cartoon',
            img : "tomandjerry.jpg"
        },
        {
            title : 'Aadu Jeevitham',
            author : 'Benyamin',
            genre : 'Novel,Fiction',
            img : "aadujeevitham.jpg"
        },
        {
            title : 'Othello',
            author : 'William Shakespeare',
            genre : 'Tragedy',
            img : "othello.jpg"
        },
        {
            title : 'Resurrection',
            author : 'Leo Tolstoy',
            genre : 'Philosophical Fiction',
            img :"leo.jpg"
        }
    ]
    
    booksRouter.get('/',function(req,res){
        res.render("books",{
        nav,
        div,
        title:'Library',
        books
       });
    });
    
    //accessing value of i from url
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('book',{
            nav,
            div,
            title:'Library',
            book: books[id]
        });
    });

    return booksRouter;
}


//exporting booksRouter
module.exports = router;