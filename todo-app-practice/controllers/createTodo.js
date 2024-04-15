const Schema = require("../models/todoSchema");

exports.createTodo = async (req, res) =>
{
    try
    {
        const {title, description} = req.body;
        const response = await Schema.create({title, description});
        
        res.status(200).json(
            {
                status: true, 
                messsage: "Entry creation successful",
                data: response
            }
        );
    }
    catch(Error)
    {
        res.status(500).json(
            {
                status: false, 
                message: "Entry is not created"
            }
        );
    }
}