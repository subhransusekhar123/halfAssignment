const mongoose = require('mongoose');
const personSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

}) 

mongoose.model.exports = personSchema