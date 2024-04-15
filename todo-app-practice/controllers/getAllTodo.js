const Schema = require("../models/todoSchema");

exports.getAllTodo = async (req, res) =>
{
    try
    {
        const response = await Schema.find({});

        if(!response)
        {
            return res.status(404).json(
                {
                    status: true, 
                    message: "Data not found"
                }
            );
        }
        res.status(200).json(
            {
                status: true,
                data: response,
                message: "This is the data retrived from the database"
            }
        );
    }
    catch(Error)
    {
        res.status(500).json(
        {
            status: false,
            message: "Error in retriving all data"
        });
    }
}

exports.getTodoById = async (req, res) =>
{
    try
    {
        const {id} = req.params;
        const response = await Schema.findById({_id: id});

        if(!response)
        {
            return res.status(404).json(
                {
                    status: true, 
                    message: "Data not found"
                }
            );
        }
        res.status(200).json(
            {
                status: true,
                data: response,
                message: `This is the data retrived from the database for id ${id}`
            }
        );
    }
    catch(Error)
    {
        res.status(500).json(
        {
            status: false,
            message: "Error in retriving all data"
        });
    }
}