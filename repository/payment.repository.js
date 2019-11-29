const {pool}=require('../db/db.config')
  
  exports.createPayment=async (data,callback)=>{
    
    pool.connect((err, client, done) => {

        const query = 'INSERT INTO payments(amount,beneficiary, payee) VALUES($1,$2,$3) RETURNING *';
        const values = [data.amount, data.beneficiary, data.payee];

        client.query(query, values, (error, result) => {
            done();
          if (error) {
           callback(error,null);
          }
          else{
            callback(null,result)
          }
        });
      });
  }
