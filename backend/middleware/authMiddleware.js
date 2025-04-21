const jwt = require('jsonwebtoken');
const User = require('../Model/userModel.js');

const dotenv = require('dotenv');

dotenv.config();

const protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        
        // Log the token first
       

        if (!token) {
            return res.status(401).json({ message: "Not Authorized, No Token" });
        }

        // Decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        // Attach the user to the request object
        req.user = await User.findById(decoded.id).select("-password");  // excluding password from the user

        next();  // Proceed to the next middleware

    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Not Authorized, Token Failed" });
    }
};

module.exports = protect;
