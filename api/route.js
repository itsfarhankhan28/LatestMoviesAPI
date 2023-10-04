const express = require('express')
const router = express.Router()
const {Create,GetMovie,GetById} = require('../controller/controller')
const upload = require('../middleware/multer')

router.post('/create',upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
]),Create)

router.get('/get',GetMovie)

router.get('/getbyid/:id',GetById)

module.exports = router