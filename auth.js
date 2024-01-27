const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization")
};

module.exports = verifyToken;s