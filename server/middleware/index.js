import expressJwt from 'express-jwt'
import Hall from '../models/hall'
//req.user is return as default
export const requireSignIn = expressJwt({
    //secret, expiry date
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],

});


export const hallOwner = async(req,res,next) =>{
    let hall = await Hall.findById(req.params.hallId).exec();
    let owner = hall.postedBy._id == req.user._id;

    if(!owner){
        return res.status(403).send("UnAuthorised")
    }
    next();
}


