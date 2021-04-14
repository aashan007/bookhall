import express from 'express'
import formidable from 'express-formidable'
import {create,halls} from '../controller/hall'
import {requireSignIn} from '../middleware'


const router = express.Router();

//add formidable where ever we use form data
router.post("/create-hall",requireSignIn,formidable(),create);
router.get("/halls",halls);



module.exports = router;