const Schema = require("../models/todoSchema");

exports.updateTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const response = await Schema.findByIdAndUpdate({ _id: id }, {
            title, description, updateOn: Date.now()
        });

        if(!response)
        {
            return res.status(404).json(
                {
                    status: false,
                    message: "Data not found"
                }
            );
        }
        
        res.status(200).json(
            {
                status: true,
                data: response,
                message: `Data updated successfully for id ${id}`
            }
        );
    }
    catch(Error)
    {
        res.status(500).json(
            {
                status: false,
                message: "Error in updated the data"
            }
        );
    }
}