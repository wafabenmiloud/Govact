const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

const { Info } = require("../model/info");

const addInfo = async (req, res) => {
  try {
   
    const { token } = req.cookies;
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, info) => {
      if (err) throw err;
      
      const {doc,cin,phone  } = req.body;
      const infoDoc = await Info.create({
        doc,cin,phone,author: info.id,
      });
      res.json(infoDoc);
    });
   
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const getInfo = async (req, res) => {
  try {
   

   
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  addInfo,
  getInfo
 };
