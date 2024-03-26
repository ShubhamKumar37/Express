

const mongoose = require("mongoose");

const Todo_Schema = mongoose.Schema(
    {
        Title:
        {
            type: String,
            required: true,
            maxLength: 50
        },

        Description:
        {
            type: String,
            required: true,
            maxLength: 100
        },

        CreatedAt:
        {
            type: Date,
            required: true,
            default: Date.now()
        },

        UpdatedAt:
        {
            type: Date,
            required: true,
            default: Date.now()
        }

    }
);

module.exports = mongoose.model("Todo", Todo_Schema);