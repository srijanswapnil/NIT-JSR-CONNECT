const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isSeller: { type: Boolean, default: false },  // To check if user is allowed to sell
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
