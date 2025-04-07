const User = require('../Model/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register User
const registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;

  const userExists = await User.findOne({ phone });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const isSeller = email.includes('@nitjsr.ac.in');

  const user = await User.create({
    name,
    email,
    phone,
    password: hashedPassword,
    isSeller,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      isSeller: user.isSeller,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'Failed to create user' });
  }
};

const authUser = async (req, res) => {
    const { phone, password } = req.body;
  
    const user = await User.findOne({ phone });
  
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isSeller: user.isSeller,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid phone or password' });
    }
  };
  

  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  };
  
  module.exports = { registerUser, authUser };