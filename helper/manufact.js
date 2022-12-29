//author:Akhil
/**/
//Session creation is pending and front-end integration is pending
const bcrypt=require('bcrypt');//safely store password
const dbs=require('../dbconnector/connection');//connection file



module.exports={
    
    manufactrer_signup:(userdata)=>{
        //promise start
        return new Promise(async(resolve,reject)=>{
            userdata.password=await bcrypt.hash(userdata.password,10);
            dbs.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{
                resolve(data)
    })
})
    },
    manufactrer_login:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginStatus=false
            let response={}
            let user=await dbs.get().collection(collection.USER_COLLECTION).findOne({email:userData.email})
            if(user){
                bcrypt.compare(userData.password,user.password).then((status)=>{
                    if(status){
                        console.log("login success");
                        response.user=user
                        response.status=true
                        resolve(response)
                    }else{
                        console.log("login failed");
                        resolve({status:false})
                    }
                })
            }else{
                console.log("login failed");
                resolve({status:false})
            }
        })
    },
    Boxinsert:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginstatus=false;
            let response={}
            dbs.get().collection(collection.BOX_COLLECTION).insertMany(userData).then((data)=>{
                resolve(data)
                console.log('inserted successfully!')
            })
    
    
        })
    
}
    
    



}