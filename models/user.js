const mongoose = require('mongoose')

// Define the user schema
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });