const express = require('express')
const router = express.Router()
const {Create,GetMovie} = require('../controller/controller')
const upload = require('../middleware/multer')

router.post('/create',upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
]),Create)

router.get('/get',GetMovie)

module.exports = router