const Todo = require("../models/Todo");

exports.getTodoById = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await Todo.findById(id);

        // data data not found
        !response ?
            res.status(404).json({
                success: false,
                data: "Record not found",
                message: "Record not found"
            })
            :
            res.status(200).json({
                success: true,
                data: response,
                message: "Data retrieved successfully"
            })
    } catch (error) {
        res.status(503).json({
            success: false,
            data: "Internal error",
            message: "Something went wrong"
        })
    }
}