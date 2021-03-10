var express = require('express');
var router = express.Router();
var pro = require('../module/tool_usage_type');

router.get('/', function(req, res, next) 
{

    pro.getAllTool(function(err, rows)
  {
    if (err) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
  });

}); 
router.get('/:tool_usage_type_id', function(req, res, next) {

    pro.getToolById(req.params.tool_usage_type_id, function(err, rows)
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

    pro.addTool(req.body, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    
    });
});



router.delete('/:tool_usage_type_id', function(req,res,next)
{
    pro.deleteTool(req.params.tool_usage_type_id, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:tool_usage_type_id', function (req, res, next) {

    pro.updateTool(req.params.tool_usage_type_id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});


module.exports = router;