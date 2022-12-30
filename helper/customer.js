const bcrypt=require('bcrypt');
const dbs=require('../dbconnector/connection');
const { disable } = require('../app(old)');
module.exports={
    customer_signup:(userdata)=>{
        //promise start
        return new Promise(async(resolve,reject)=>{
            userdata.password=await bcrypt.hash(userdata.password,10);
            dbs.get().collection(collection.CUSTOMER_COLLECTION).insertOne(userData).then((data)=>{
                resolve(data)
    })
})
    },
    customer_login:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginstatus=false
            let response={}
            let user=await dbs.get().collection(collection.CUSTOMER_COLLECTION).findOne({email:userData.email})
            if(user){
                bcrypt.compare(userData.password,user.password).then((status)=>{
                    if(status){
                        console.log("Login sucessfull");
                        response.user=user
                        response.status=true
                        resolve(response)


                    }else{
                        console.log("Login failed");
                        resolve({status:false})
                    }
                })
            }else{
                console.log("Login failed");
                resolve({status:false})
            }
        })
    }
}
