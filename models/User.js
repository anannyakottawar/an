const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,

  },
  email: {
    type: String,
    
  },
  password: {
    type: String,

  },
  contact: {
    type: Number,
    
  },
  Address: {
    type: String,

  },
  Age: {
    type: Number,

  },
  D_O_B: {
    type: Date,
    
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
