var db = require('../dbconnection');


    var Pro = {

      getAllProgram:function(callback)
      {
         return db.query("Select * from Program",callback);
      }, 
      
       getProgramId:function(product_id, callback)
       {
        return db.query("select * from Program where program_id=?",[program_id],callback);
       },
    
       addProgram:function(program,callback)
        {
          return db.query("Insert into Program (program_id, project_id, product_id, folder_id, name, version_id, version_description,effective_date,lob,deleted_ind,create_by,create_ts,modified_by,modified_ts) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,)",[    
        
            program.program_id,
            program.project_id,
            program.product_id,
            program.folder_id,
            program.name,
            program.version_id,
            program.version_description,
            program.effective_date,
            program.lob,
            program.deleted_ind,
            program.create_by,
            program.create_ts,
            program.modified_by,
            program.modified_ts
          ],callback );
        },

       deleteProgram:function(program_id,callback)
       {
          return db.query("delete from Program where program_id=?",[program_id],callback);
       },
       updateProgram:function(program_id,program,callback)
       {
          return db.query("update program set  project_id=?, product_id=?, folder_id=?, name=?, version_id=?, version_description=?,effective_date=?,lob=?,deleted_ind=?,create_by=?,create_ts=?,modified_by=?,modified_ts=?, where program_id=?",
          [
            program.project_id,
            program.product_id,
            program.folder_id,
            program.name,
            program.version_id,
            program.version_description,
            program.effective_date,
            program.lob,
            program.deleted_ind,
            program.create_by,
            program.create_ts,
            program.modified_by,
            program.modified_ts,
            program_id],
            callback);
       },
   
      };

      
module.exports=Pro;