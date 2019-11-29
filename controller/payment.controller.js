const paymentRepository=require('../repository/payment.repository')

exports.createPayment=(req,res)=>{
    const data={
        "amount":req.body.amount,
        "beneficiary":req.body.beneficiary,
        "payee":req.body.payee
    }
    paymentRepository.createPayment(data,(err,result)=>{  
        return res.status(200).send(result.rows[0]);

    })

}