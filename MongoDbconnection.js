/*Database connection is established*/
const { application } = require('express');
// const mongoose=require('mongoose');
const MongoClient = require('mongodb').MongoClient;
// var username='vacctrac';
// var password='*********';
// var cluster='cluster0';

const state={
    db:null
}
/*error msg is fetch from the express file (app.js)*/



//module is exported as a function which takes a callback function as a parameter
//done (working) as a call back function is called when the connection is established
module.exports.connect=function(done){
// `mongodb+srv://${username}:${password}@${cluster}.pbhc9.azure.mongodb.net/?retryWrites=true&w=majority`/*it is take from the atlas db*/ //occures some error
//  mongoose.connect(`mongodb+srv://vacctrac:aasj%402023@cluster0.pbhc9.azure.mongodb.net/test`) //occures some error

   
    const url='mongodb+srv://vacctrac:aasj%402023@cluster0.pbhc9.azure.mongodb.net/test';
        
      console.log(done)//done as call back...
        
    
const dbname='vacctrac';
 
MongoClient.connect(url,(err,data) => {

    if (err)
        return done(err);//if error in connection then it will return the error from app.js   
   
    state.db = data.db(dbname);


    done()
    })
}

//module is exported as a function which takes a callback function as a parameter done as a call back function
//Get and post are api
module.exports.get=function(){
    return state.db
}
module.exports.post=function(){
    return state.db
}
