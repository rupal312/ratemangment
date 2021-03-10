var db = require('../dbconnection');


    var Pro = {

      getAllFolder:function(callback)
      {
         return db.query("Select * from folder",callback);
      }, 
      
       getFolderById:function(folder_id, callback)
       {
        return db.query("select * from folder where folder_id=?",[folder_id],callback);
       },
    
       addFolder:function(folder,callback)
        {
          return db.query("Insert into folder( folder_id,product_id, name, deleted_ind, create_by, create_ts, modified_by,modified_ts) values(?,?,?,?,?,?,?,?)",[    
         folder.folder_id,
          folder.product_id,
          folder.name, 
          folder.deleted_ind, 
          folder.create_by, 
          folder.create_ts, 
          folder.modified_by, 
          folder.modified_ts
        ],callback );
        },

       deleteFolder:function(folder_id,callback)
       {
          return db.query("delete from folder where folder_id=?",[folder_id],callback);
       },
       updateFolder:function(folder_id,folder,callback)
       {
          return db.query("update folder set  product_id=?,name=?, deleted_ind=?, create_by=?, create_ts=?, modified_by=?,modified_ts=? where folder_id=?",
          [
          folder.product_id,
          folder.name, 
          folder.deleted_ind, 
          folder.create_by, 
          folder.create_ts, 
          folder.modified_by, 
          folder.modified_ts,
          folder_id],
            callback);
       },
   
      };

      
module.exports=Pro;