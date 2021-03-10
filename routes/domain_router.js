var express = require('express');
var router = express.Router();
var pro = require('../module/domain');

router.get('/', function(req, res, next) 
{

    pro.getAllDomain(function(err, rows)
  {
    if (err) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
  });

}); 
router.get('/:domain_id', function(req, res, next) {

    pro.getDomainById(req.params.domain_id, function(err, rows)
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

    pro.addDomain(req.body, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    
    });
});



router.delete('/:domain_id', function(req,res,next)
{
    pro.deleteDomain(req.params.domain_id, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:domain_id', function (req, res, next) {

    pro.updateDomain(req.params.domain_id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});


module.exports = router;