const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    img: {
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    like:{
        type: Number,
        default: 0
    },
    dislike:{
        type: Number,
        default: 0
    },
    category:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "category"
    }
})

module.exports = mongoose.model('Category', newsSchema)