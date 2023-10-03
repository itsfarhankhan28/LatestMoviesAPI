const Schema = require('../model/schema')

const Create = async(req,res)=>{
    const {moviename , year , movietime , ratings , shortdescription , director , writer , stars , storyline , genres,media} = req.body
    try{
        if(req.files){
            const imageurl = req.files["image"][0].path
            const videourl = req.files["video"][0].path

            const schema = new Schema({
                moviename:moviename,
                year:year,
                movietime:movietime,
                ratings:ratings,
                shortdescription:shortdescription,
                director:director,
                writer:writer,
                stars:stars,
                storyline:storyline,
                genres:genres,
                media:[{
                    imageurl:imageurl,
                    videourl:videourl
                }]
            })

            const uploadresult = await schema.save()

            res.json(uploadresult)
        }
    }catch(err){
        res.json(err)
    }
}

const GetMovie = async(req,res)=>{
    try{
        const getmovies = await Schema.find()
        console.log(getmovies)
        res.json(getmovies)
    }catch(err){
        console.log(err)
    }
}

module.exports = {Create,GetMovie}