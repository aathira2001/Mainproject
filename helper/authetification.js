//author:Akhil,time:12:10
//Session creation is pending and front-end integration is pending
//used in promise:handle multiple async function
const bcrypt=require('bcrypt');//safely store password
const dbs=require('../dbconnector/connection');//connection file


module.exports={
    manufactrer_signup:(userdata)=>{
        /*stores the password in the encrypted format*/
        //promise function start
        return new Promise(async(resolve,reject)=>{
            userdata.password=await bcrypt.hash(userdata.password,10);//10 is actually the range
            dbs.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{//user collection  get int in collection.js file
                resolve(data)// after resolve that will passes in data  a call back function
                //promise function end
    })
})
    },
    manufactrer_login:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginStatus=false//checking the status 
            let response={}//null response 
            let user=await dbs.get().collection(collection.USER_COLLECTION).findOne({email:userData.email})/*accessing the collection  and with the help of find one
                                                                                                              operator to match the email id and password*/ 
            if(user){
                bcrypt.compare(userData.password,user.password).then((status)=>{//using compare operator to compare the password
                    if(status){
                        console.log("login success");//This will return to  the terminal field only
                        response.user=user
                        response.status=true
                        resolve(response)
                    }else{
                        console.log("login failed");//this will return to the terminal field also
                        resolve({status:false})
                    }
                })
            }else{
                console.log("login failed");
                resolve({status:false})
            }
        })
    }


}
