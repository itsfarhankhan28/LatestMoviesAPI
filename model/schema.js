const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    moviename:String,
    year:Number,
    movietime:String,
    ratings:String,
    shortdescription:String,
    director:String,
    writer:String,
    stars:String,
    storyline:String,
    genres:String,
    media:[{
        imageurl:String,
        videourl:String
    }],
})

const LatestMoviesSchema = mongoose.model('LatestMoviesSchema',schema)

module.exports = LatestMoviesSchema