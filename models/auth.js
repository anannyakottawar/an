const bcrypt = require("bcrypt");

const userSchema = new bcrypt.Schema({
    email:{
        type: String,
    },
    password: {
        type: String,
    }
    ,
    contact: {
        type: String,
    }
});

module.exports = bcrypt.model("User",userSchema);
