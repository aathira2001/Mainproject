const express=require('express');
const sql=require('mysql');
module.exports.connect=function(done){

var connection=mysqlCreateconnection.sql({
    host:"localhost",
    username:"",
    password:""

});

connection.connect(function(err){
    if(err)
        throw err;
        console.log("connected");
    
})
}
module.export.router
