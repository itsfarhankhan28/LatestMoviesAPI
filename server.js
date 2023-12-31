const express = require('express')
const app = express()
const router = require('./api/route')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { cloudinaryConfig } = require('./config/cloudinaryConfig')
dotenv.config()
const cors = require('cors')

//middleware
app.use(cors({
    origin:'https://cine-base.vercel.app',
    methods:'GET,POST,PUT,DELETE,PATCH',
    credentials:true
}))
app.use(express.json())
app.use('*',cloudinaryConfig)
app.use('/movies',router)

app.get('/',(req,res)=>{
    res.send("This is the Latest movies API")
})

//DB connnection

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful")
}).catch(()=>{
    console.log("connection unsuccessful")
})

app.listen(process.env.PORT,()=>{
    console.log(`listening to port ${process.env.PORT}`)
})