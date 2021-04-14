import expressJwt from 'express-jwt'

//req.user is return as default
export const requireSignIn = expressJwt({
    //secret, expiry date
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],

});