const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

const { Permis } = require("../model/permis");

const check = async (req, res) => {
  try {
    const { token } = req.cookies;
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, info) => {
      if (err) throw err;
      
      const existingPermis = await Permis.findOne({cin:req.body.cin , permis:req.body.permis})
      if (!existingPermis) {
        return res.status(401).send({ message: "Invalid cin or Permis number" });
      }
      res.json(existingPermis.ready);
    });
   
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

//admin
const addPermis = async (req, res) => {
  try {
  
      const { cin , permis ,ready } = req.body;
      const permisDoc = await Permis.create({
        cin , permis ,ready
      });
      res.json(permisDoc);

  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
  
};
const updatePermis = async (req, res) => {
  try {
      const {ready} = req.body;
      const permisDoc = await Post.findById(id);
      await permisDoc.updateOne({
      ready
      });
  
      res.json(permisDoc);
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }

};


module.exports = {
  check,addPermis,updatePermis
 };
