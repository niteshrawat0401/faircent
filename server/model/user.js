const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    name : {
        type: String,
    },
    email : {
        type : String
    },
    passWord : {
        type : String
    }
})

const Users  = model("user", userSchema);
module.exports = Users;