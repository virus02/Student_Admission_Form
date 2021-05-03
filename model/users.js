const mongoose = require("mongoose");
const schema = mongoose.schema;

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
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
});

module.exports = User = mongoose.model("user", userSchema);
