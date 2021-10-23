const express = require('express');
const updateRouter = express.Router();
const Bookdata = require('../../model/Bookdata');
const Authordata = require('../../model/Authordata');

function router(adm,opt){

    updateRouter.route("/:id").post(function(req, res) {
        Bookdata.findByIdAndUpdate(
          { _id: req.params.id },
          function(err, result) {
            if (err) {
              res.send(err);
            } else {
              res.send(result);
            }
          }
        );
      });

      return updateRouter;

}

module.exports = router;