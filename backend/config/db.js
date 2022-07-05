const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected`)
    } catch(err){
        console.log(err)
    }
}

module.exports= connectDB;