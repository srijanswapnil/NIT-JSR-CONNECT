const jwt = require('jsonwebtoken');
const User = require('../Model/userModel.js');

const dotenv = require('dotenv');

dotenv.config();

const protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Not Authorized, No Token" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select("-password");  // attaching user to req

        next();

    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Not Authorized, Token Failed" });
    }
};

module.exports = { protect };
