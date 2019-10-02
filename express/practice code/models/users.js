const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const usersSchema = new Schema({
    name : String,
    email : String
});
var userModel = mongoose.model("Users", usersSchema);
module.exports = userModel;


