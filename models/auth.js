const bcrypt = require("bcrypt");

const userSchema = new bcrypt.Schema({
    email:{
        type: String,
    },
    password: {
        type: String,
    }
    ,
    password5: {
        type: String,
    }
});

module.exports = bcrypt.model("User",userSchema);
