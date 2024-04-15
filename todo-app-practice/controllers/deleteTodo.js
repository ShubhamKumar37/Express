const Schema = require("../models/todoSchema");

exports.deleteTodoById = async (req, res) => {
    try {
        const {id} = req.params;
        await Schema.findByIdAndDelete({_id: id});
        
        res.status(200).json(
            {
                status: true,
                message: `Data is deleted successfully for id ${id}`
            }
        );
    }
    catch(Error)
    {
        res.status(500).json(
            {
                status: false,
                message: "Error in deleting the data"
            }
        );
    }
}