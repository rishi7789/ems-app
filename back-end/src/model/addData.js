const mongoose = require("mongoose")


const empSchema = new mongoose.Schema({
    empid: {
        type: Number,
        required: true,
        unique: true
    },
    empname: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },

})


const AddEmp = new mongoose.model("AddEmp", empSchema)

module.exports = AddEmp;