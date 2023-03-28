const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

const { Reclamation } = require("../model/reclamation");

const addRec = async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);
  try {
   
    const { token } = req.cookies;
  
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, info) => {
      if (err) throw err;
      const { summary, content } = req.body;
      const recDoc = await Reclamation.create({
        
        summary,
        content,
        cover: newPath,
        author: info.id,
      });
      res.json(recDoc);
    });
   
  } catch (error) {
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
};




module.exports = {
  addRec,
};
