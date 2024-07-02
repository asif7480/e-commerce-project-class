const asyncHandler = require("express-async-handler")
const JWT = require("jsonwebtoken");
const User = require("../models/userModel");

// protected route middleware
const requireSignIn = asyncHandler( async(request, response, next) => {
    let token;
    
    if(request.headers.authorization && request.headers.authorization.startsWith("Bearer")){
        try{
            // get token from the header
            token = request.headers.authorization.split(" ")[1]

            //verify the token
            const decoded = JWT.verify(token, process.env.SECRET_KEY)
            console.log(decoded);

            request.user = await User.findById(decoded.id)
            console.log(request.user);
            next()

        }catch(err){
            console.log(err);
            response.status(401)
            throw new Error("Not Authorized. Token may be invalid or expired")
        }
    }
})

// check isAdmin middleware
const isAdmin = asyncHandler( async(request, response, next) => {
    const user = await User.findById( request.user._id )
    if(user.role !== "admin"){
        response.status(401)
        throw new Error("Not an admin. UnAuthorized")
    }

    next()
})


module.exports = {
    requireSignIn,
    isAdmin
}