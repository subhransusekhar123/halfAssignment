const  personSchema  = require('../models/models');
const bcrypt = require('bcrypt');

const signupController = (req,res) =>{
    
}

const loginController = (req,res) => {

}

const getController = (req,res) =>{
    res.send('hello people')
} 

const postController = (req,res) => {
    res.send()
}

const putController = (req,res) => {
    res.send()
}

const deleteController = (req,res) => {
    res.send()
}

module.exports = {getController,postController,putController,deleteController,signupController,loginController}