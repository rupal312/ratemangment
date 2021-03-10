var express = require('express');
var router = express.Router();
var pro = require('../module/program');

router.get('/', function(req, res, next) 
{

    pro.getAllProgram(function(err, rows)
  {
    if (err) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
  });

}); 
router.get('/:program_id', function(req, res, next) {

    pro.getProgramById(req.params.program_id, function(err, rows)
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

    pro.addProgram(req.body, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    
    });
});



router.delete('/:program_id', function(req,res,next)
{
    pro.deleteProgram(req.params.program_id, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:program_id', function (req, res, next) {

    pro.updateProgram(req.params.program_id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});


module.exports = router;