import express from 'express'
import formidable from 'express-formidable'
import {create,halls,image,sellerHalls,remove,read,update} from '../controller/hall'
import {requireSignIn,hallOwner} from '../middleware'


const router = express.Router();

//add formidable where ever we use form data
router.post("/create-hall",requireSignIn,formidable(),create);
router.get("/halls",halls);
router.get("/hall/image/:hallId",image)
router.get("/seller/halls",requireSignIn,sellerHalls);
router.delete("/delete-hall/:hallId",requireSignIn,hallOwner,remove);
router.get("/hall/:hallId",read);
router.put("/hall/update-hall/:hallId",requireSignIn,hallOwner,formidable(),update);



module.exports = router;