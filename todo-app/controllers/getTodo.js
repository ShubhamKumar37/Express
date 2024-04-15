const Todo = require("../Models/Todo");

exports.getTodo = async (req, res) => 
{
    try
    {
        const response = await Todo.find({});

        res.status(200).json(
            {
                status: true,
                data: response,
                message: "Finding successful"
            }
        );
    }
    catch(Error)
    {
        console.log("Error in finding");
        res.status(500).json(
            {
                status: false,
                error: Error.message,
                message: "Server Error"
            }
        );
    }
}

exports.getTodoById = async (req, res) => 
{
    try
    {
        const id =  req.params.id;
        const response = await Todo.findById({_id: id});

        if(!response)
        {
            return res.status(404).json(
                {
                    success: false,
                    message: "No data found"
                }
            );
        }

        res.status(200).json(
            {
                status: true,
                data: response,
                message: `Finding successful of id ${id}` 
            }
        );
    }
    catch(Error)
    {
        console.log("Error in finding");
        res.status(500).json(
            {
                status: false,
                error: Error.message,
                message: "Server Error h"
            }
        );
    }
}