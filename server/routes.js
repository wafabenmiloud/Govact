const express = require('express');
const router = express.Router();

const {register,  login,  logged} = require('./api/user_api');
//user api
router.post('/register', register );
router.post('/login', login)
router.get('/logged', logged)




module.exports = router;
