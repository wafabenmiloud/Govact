const express = require('express');
const app = express();
const router = express.Router();

const { signupUser, signinUser, logout, authenticateToken } = require('../api/user_api');

//user API
router.post('/register', signupUser);
router.post('/login', signinUser);
router.get('/logout',logout);
router.get('/loggedIn',authenticateToken);


module.exports = router;

