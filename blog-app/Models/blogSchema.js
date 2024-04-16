const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    Title:{
        type: String,
        required: true,
        maxLength: 50
    },
    Description:{
        type: String,
        required: true,
        maxLength: 300
    },
    Like:{
        type: Boolean,
        default: false
    },
    Comment:{
        type: String,
        required: false,
        maxLength: 200,
        default: ""
    },
    UploadedAt:{
        type: Date,
        required: false,
        default: Date.now()
    },
    UpdatedAt:{
        type: Date,
        required: false,
        default: Date.now()
    }
})

module.exports = mongoose.model("blogSchema", blogSchema, "Posts");