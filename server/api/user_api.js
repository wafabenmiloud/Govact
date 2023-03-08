const dotenv = require("dotenv");
dotenv.config();
var jwt = require('jwt-simple')

const  User  = require("../model/user");

const register = async (req, res) => {
    try {
      if ((!req.body.fullname) || (!req.body.email) || (!req.body.password)) {
        res.json({ success: false, msg: 'Enter all fields' });
      } else {
        const newUser = new User({
          fullname: req.body.fullname,
          email: req.body.email,
          password: req.body.password,
        });
        await newUser.save();
        res.json({ success: true, msg: 'Successfully saved' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Internal Server Error' });
    }
  };
  
const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(403).send({ success: false, msg: 'User not found' });
        }

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err || !isMatch) {
                return res.status(403).send({ success: false, msg: 'Wrong password' });
            }

            const token = jwt.encode(user.toJSON(), process.env.SECRET);
            res.json({ success: true, token });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
};

const logged = async (req, res) => {
    try {
        if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
            return res.status(401).send({ success: false, msg: 'Unauthorized' });
        }

        const token = req.headers.authorization.split(' ')[1];
        const decodedtoken = jwt.decode(token, process.env.SECRET);
        const msg = {
            fullname: decodedtoken.fullname,
            email: decodedtoken.email,
        };
        return res.json({ loggedIn: true, msg });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
};


module.exports = {
   register,
   login,
   logged,
  };