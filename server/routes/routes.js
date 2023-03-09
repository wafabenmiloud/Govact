const express = require('express');
const app = express();
const router = express.Router();

const { signupUser, signinUser, logout, authenticateToken } = require('../api/user_api');
const { addInfo, getInfo } = require('../api/info_api');
const { check } = require('../api/permis_api');
const { addRec } = require('../api/reclamation_api');

//user API
router.post('/register', signupUser);
router.post('/login', signinUser);
router.get('/logout',logout);
router.get('/loggedIn',authenticateToken);

//info API
router.post('/addinfo', addInfo);
router.get('/getinfo', getInfo);

//permis API
router.post('/check',check);

//reclamation API
router.post('/addrec', addRec);

module.exports = router;

