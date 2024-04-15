const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: true,
        maxLength: 50
    },
    description:{
        type: String, 
        required: true,
        maxLength: 100
    },
    changeOn:{
        type: Date, 
        required: true,
        default: Date.now()
    },
    updateOn:{
        type: Date, 
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model("Schema", tableSchema, "Strategy");