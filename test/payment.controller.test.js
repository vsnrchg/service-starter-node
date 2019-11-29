
/******************************************************************************************
 * @Purpose     : Here we have to write test script in mocha for testing backend using
 *                chai
 * @file        : test.js
 * @author      : Dipak Patil
 * @since       : 05-07-2019
 ******************************************************************************************/

const server=require('../index');
const chai=require('chai');
const chaihttp=require('chai-http');

chai.use(chaihttp);
chai.should();

describe('payments',()=>{
    const data={
        "amount": 100,
        "beneficiary": {
            "name": "shyam",
            "ifscCode": "HDFC1234",
            "accountNumber": 12345
        },
        "payee": {
            "name": "shyam",
            "ifscCode": "HDFC1234",
            "accountNumber": 12345
        }
    };
    
    it('payment process',(done)=>{
        chai.request(server).post('/payments').send(data).end((err,res)=>{
                res.should.have.status(200);
            done();
        })
    })
}) 

