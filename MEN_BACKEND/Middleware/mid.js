const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    const token = req.cookie.authcookie
    if (!token) {
        return res.status(401).json({ error: "Access denied, no token provided" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ error: "Invalid token" });
    }
};

module.exports=verifyToken