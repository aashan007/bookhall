import Hall from '../models/hall';
import fs from 'fs'

export const create = async(req,res)=>{
    console.log(req.fields)
    console.log(req.files)

    try{
        let fields = req.fields;
        let files = req.files;

        let hall = new Hall(fields);
        //handle the image
        if(files.image){
            hall.image.data = fs.readFileSync(files.image.path);
            hall.image.contentType = files.image.type;
        }

        hall.save((err,result)=>{
            if(err){
                console.log("Saving hall failed");
                res.status(400).send('Error in saving')
            }
            res.json(result);

        })

    }catch(err){
        console.log(err);
        res.status(400).json({
            err:err.message
        });
    }
}

export const halls = async(req,res)=>{
    let all = await Hall.find({})
    .limit(24)
    .select('-image.data')
    .populate("postedBy","_id name") //
    .exec();
    console.log(all)
    res.json(all)
}