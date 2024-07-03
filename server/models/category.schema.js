const mongoose = require('mongoose')

mongoose.Schema({
    categoryName: {
        type: String,
        require: true
    }
})