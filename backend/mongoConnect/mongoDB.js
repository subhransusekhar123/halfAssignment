const mongoose = require('mongoose');


const mongooseConnect = () =>{
    mongoose.connect('mongodb://localhost:27017/my_database')
    .then(()=>{console.log('mongodb connected')})
    .catch((err)=>{console.log(err)})
}


module.exports = {mongooseConnect}