const chai=require('chai');
var expect = chai.expect;
const sinon=require('sinon');
const chaihttp=require('chai-http');

chai.use(chaihttp);

const paymentRepository=require('../repository/payment.repository')
    
const data={
    "amount":100,
    "beneficiary":{
        "name":"shyam",
        "accountNumber":12345,
        "ifscCode":"HDFC1234"
    },
    "payee":{
        "name":"shyam",
        "accountNumber":12345,
        "ifscCode":"HDFC1234"
    }
}    

describe("Testing Payment Repository layer",()=>{
    it('can save the payment',(done)=>{
        sinon.mock(paymentRepository.createPayment(data,(err,result)=>{
            let savedData=result.rows[0];
            
            expect(savedData.amount).to.equal(data.amount); 
            expect(savedData.beneficiary.name).to.equal(data.beneficiary.name);  
            expect(savedData.beneficiary.accountNumber).to.equal(data.beneficiary.accountNumber);  
            expect(savedData.beneficiary.ifscCode).to.equal(data.beneficiary.ifscCode);  

            expect(savedData.payee.name).to.equal(data.payee.name);
            expect(savedData.payee.accountNumber).to.equal(data.payee.accountNumber);  
            expect(savedData.payee.ifscCode).to.equal(data.payee.ifscCode);  
  
            done();

        }));
    })
})
    
