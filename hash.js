const bcrypt = require('bcrypt');
const {MD5} = require('crypto-js');
const jwt = require('jsonwebtoken');


/*bcrypt.genSalt(10,(err,salt)=>{
    if(err) return next(err);
    bcrypt.hash('password123',salt,(err,hash)=>{
        if(err) return next(err);
        console.log(hash)
    })
})*/

/*const secret = "mysecretpassword";
const secretSalt = 'dfsdgsfgdsfdgxfgsdfvdfsvvdsvsdf'

const user = {
    id:1,
    token: MD5('SDFSFDSFDSF').toString() + secretSalt
}

const receivedToken = 'b5087b98315334da9e6dc15dc50dc0aedfsdgsfgdsfdgxfgsdfvdfsvvdsvsdf'
if(receivedToken === user.token){
    console.log('move forward')
}

console.log(user)*/


const id = '1000';
const secret = 'supersecret';

const receivedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y';

const token = jwt.sign(id,secret);
const decodeToken = jwt.verify(receivedToken,secret);

console.log(decodeToken)
