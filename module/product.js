var db = require('../dbconnection');


    var Pro = {

      getAllProduct:function(callback)
      {
         return db.query("Select * from product",callback);
      }, 
      
       getProductId:function(product_id, callback)
       {
        return db.query("select * from product where product_id=?",[product_id],callback);
       },
    
       addProduct:function(product,callback)
        {
          return db.query("Insert into product (product_id, project_id, name, deleted_ind, create_by, create_ts, modified_by, modified_ts) values(?,?,?,?,?,?,?,?)",[    
          product.product_id,
          product.project_id, 
          product.name, 
          product.deleted_ind, 
          product.create_by, 
          product.create_ts, 
          product.modified_by, 
          product.modified_ts
        ],callback );
        },

       deleteProduct:function(product_id,callback)
       {
          return db.query("delete from product where product_id=?",[product_id],callback);
       },
       updateProduct:function(product_id,product,callback)
       {
          return db.query("update product set  project_id=?,name=?, deleted_ind=?, create_by=?, create_ts=?, modified_by=?,modified_ts=? where product_id=?",
          [
            product.project_id,
            product.name,
            product.deleted_ind, 
            product.create_by, 
            product.create_ts, 
            product.modified_by, 
            product.modified_ts,
            product_id],
            callback);
       },
   
      };

      
module.exports=Pro;