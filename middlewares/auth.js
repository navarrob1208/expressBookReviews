const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    if(req.session.authorization){
        const token = req.session.authorization['accessToken'];
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded.user;
            console.log("decoded", decoded);
            return next();
        }catch(error){
            return res.status(401).json({
                "success":false,
                "error":"Invalid Token"
            });
        }
    }else{
        return res.status(401).json({
            "success":false,
            "error":"Access denied"
        });
    }
};

module.exports = verifyToken;