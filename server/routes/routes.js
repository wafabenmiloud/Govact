const express = require('express');
const app = express();
const router = express.Router();
const multer = require('multer');

const { signupUser, signinUser, logout, authenticateToken } = require('../api/user_api');
const { addInfo, getInfo } = require('../api/info_api');
const { check,addPermis,updatePermis } = require('../api/permis_api');
const { addRec } = require('../api/reclamation_api');

//upload image
app.use('/uploads', express.static(__dirname + '/uploads'));
const uploadMiddleware = multer({ dest: 'uploads/' });



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
router.post('/addpermis',addPermis);
router.put('/updatepermis',updatePermis);

//reclamation API
router.post('/addrec', uploadMiddleware.single('file') , addRec);

module.exports = router;

