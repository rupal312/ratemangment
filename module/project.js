var db = require('../dbconnection');


    var Pro = {

      getAllProject:function(callback)
      {
         return db.query("Select * from Project",callback);
      }, 
      
       getProjectId:function(project_id, callback)
       {
        return db.query("select * from Project where project_id=?",[project_id],callback);
       },
    
       addProject:function(project,callback)
        {
          return db.query("Insert into Project (project_id, domain_id,name,deleted_ind,create_by,create_ts,modified_by,modified_ts) values(?,?,?,?,?,?,?,?)",[    
        
            project.project_id,
            project.domain_id,
            project.name,
            project.deleted_ind,
            project.create_by,
            project.create_ts,
            project.modified_by,
            project.modified_ts,
          ],callback );
        },

       deleteProject:function(project_id,callback)
       {
          return db.query("delete from Project where project_id=?",[project_id],callback);
       },
       updateProject:function(project_id,project,callback)
       {
          return db.query("update project set domain_id,name,deleted_ind,create_by,create_ts,modified_by,modified_ts where project_id=?",
          [
            project.domain_id,
            project.name,
            project.deleted_ind,
            project.create_by,
            project.create_ts,
            project.modified_by,
            project.modified_ts,
            project_id],
            callback);
       },
   
      };

      
module.exports=Pro;