const mongoose = require("mongoose");
const schema = mongoose.schema;

//Create schema
const studentSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    dept: {
        type: String,
        required: true,
    },
    doj: {
        type: String,
        required: true,
    },
    created_on: {
        type: Date,
        default: Date.now(),
    },
    created_by: {
        type: String,
        required: true,
    },
});

module.exports = Student = mongoose.model("student", studentSchema);
