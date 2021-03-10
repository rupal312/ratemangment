var express = require('express');
var router = express.Router();
var pro = require('../module/project');

router.get('/', function(req, res, next) 
{

    pro.getAllProject(function(err, rows)
  {
    if (err) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
  });

}); 
router.get('/:project_id', function(req, res, next) {

    pro.getProjectById(req.params.project_id, function(err, rows)
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

    pro.addProject(req.body, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    
    });
});



router.delete('/:project_id', function(req,res,next)
{
    pro.deleteProject(req.params.project_id, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:project_id', function (req, res, next) {

    pro.updateProject(req.params.project_id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});


module.exports = router;