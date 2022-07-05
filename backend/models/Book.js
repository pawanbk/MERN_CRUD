const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    author:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Book',BookSchema);