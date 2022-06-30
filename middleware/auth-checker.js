const jwt = require('jsonwebtoken');

function checkAuth(req,res,next){
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decodedToken;
        next();
    } catch (error) {
        console.log('middleware error',error)
        return res.status(401).json({
            'message': "Invalid request or expired token",
            'error': error
        })
    }
}

module.exports = {
    checkAuth
}