const dotenv = require("dotenv");
dotenv.config();

const { Reclamation } = require("../model/reclamation");

const addRec = async (req, res) => {
  try {
   

   
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};




module.exports = {
  addRec,
 
};
