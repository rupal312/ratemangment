var db = require('../dbconnection');


    var Pro = {

      getAllTool:function(callback)
      {
return db.query("Select * from tool_usage_type",callback);
      }, 
      
       getToolById:function(tool_usage_type_id, callback)
       {
return db.query("select * from tool_usage_type where tool_usage_type_id=?",[tool_usage_type_id],callback);
       },
    
       addTool:function(tool,callback)
        {
return db.query("Insert into tool_usage_type(tool_usage_type_id, name, deleted_ind, create_by, create_ts, modified_by,modified_ts) values(?,?,?,?,?,?,?,?)",[    
          tool.tool_usage_type_id,
          tool.name, 
          tool.deleted_ind, 
          tool.create_by, 
          tool.create_ts, 
          tool.modified_by, 
          tool.modified_ts
        ],callback );
        },

       deleteTool:function(tool_usage_type_id,callback)
       {
return db.query("delete from tool where tool_usage_type_id=?",[tool_usage_type_id],callback);
       },
       updateTool:function(tool_usage_type_id,tool,callback)
       {
return db.query("update tool_usage_type set name=?, deleted_ind=?, create_by=?, create_ts=?, modified_by=?,modified_ts=? where tool_usage_type_id=?",
          [
          tool.name, 
          tool.deleted_ind, 
          tool.create_by, 
          tool.create_ts, 
          tool.modified_by, 
          tool.modified_ts,
          tool_usage_type_id],
         callback);
       },
   
      };

      
module.exports=Pro;