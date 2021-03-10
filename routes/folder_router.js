var express = require('express');
var router = express.Router();
var pro = require('../module/folder');

router.get('/', function(req, res, next) 
{

    pro.getAllFolder(function(err, rows)
  {
    if (err) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
  });

}); 
router.get('/:folder_id', function(req, res, next) {

    pro.getFolderById(req.params.folder_id, function(err, rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
    
    }); 
    


router.post('/',function(req,res,next){

    pro.addFolder(req.body, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    
    });
});



router.delete('/:folder_id', function(req,res,next)
{
    pro.deleteFolder(req.params.folder_id, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:folder_id', function (req, res, next) {

    pro.updateFolder(req.params.folder_id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});


module.exports = router;