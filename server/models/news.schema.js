const mongoose = require('mongoose')

const newsSChema = mongoose.Schema({
    title: {
        type:String,
        require: true
    },

    description: {
        type:String,
        require:true
    },

    
})