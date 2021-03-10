var db = require('../dbconnection');


    var Pro = {

      getAllDomain:function(callback)
      {
         return db.query("Select * from domain",callback);
      }, 
      
       getDomainById:function(domain_id, callback)
       {
        return db.query("select * from domain where domain_id=?",[domain_id],callback);
       },
    
       addDomain:function(domain,callback)
        {
          return db.query("Insert into folder( domain_id,tool_usage_type_id, name, deleted_ind, create_by, create_ts, modified_by,modified_ts) values(?,?,?,?,?,?,?,?)",[    
         domain.domain_id,
         domain.tool_usage_type_id,
         domain.name, 
         domain.deleted_ind, 
         domain.create_by, 
         domain.create_ts, 
         domain.modified_by, 
         domain.modified_ts
        ],callback );
        },

       deleteDomain:function(domain_id,callback)
       {
          return db.query("delete from domain where domain_id=?",[domain_id],callback);
       },
       updateDomain:function(domain_id,domain,callback)
       {
          return db.query("update domain set tool_usage_type_id=?,name=?, deleted_ind=?, create_by=?, create_ts=?, modified_by=?,modified_ts=? where domain_id=?",
          [
            domain.tool_usage_type_id,
            domain.name, 
            domain.deleted_ind, 
            domain.create_by, 
            domain.create_ts, 
            domain.modified_by, 
            domain.modified_ts,
            domain_id],
            callback);
       },
   
      };

      
module.exports=Pro;