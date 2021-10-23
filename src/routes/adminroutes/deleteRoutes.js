const express = require('express');
const deleteRouter = express.Router();
const Bookdata = require('../../model/Bookdata');
const Authordata = require('../../model/Authordata');

function router(adm,opt){

    deleteRouter.get('/bookdata/:id',(req,res)=>{
        console.log('Working');

        const id = req.params.id;
        console.log(id);

        Bookdata.remove({ _id: id }, (error, posts) => {
            if (error) {
                console.warn(error);
            }
            else {
                res.redirect('booksadmin');
        }
        });


    });


    // deleteRouter.delete('/',function(req,res){
    //     var collection = Bookdata.collection.bookdata;

    //     collection.deleteOne({_id: Bookdata.findById(req.params.id)},(err,results)=>{
    //         res.redirect('booksadmin');
            
    //         console.log(results);
    //     });
    //     res.json({success: id});
    // });




    return deleteRouter;
}

module.exports = router;