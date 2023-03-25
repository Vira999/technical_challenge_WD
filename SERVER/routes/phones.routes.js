const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Phone = require("../models/Phone.model");


//all phones 

router.get("/phones", (req, res) => {
    Phone.find()
      .then((allPhones) => res.json(allPhones))
      .catch((err) => console.log(err));
  });
  
 //phone details
  
  router.get("/phones/:id", (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
    Phone.findById(id)
      .then((foundPhone) => res.json(foundPhone))
      .catch((err) => console.log(err));
  });
  
  module.exports = router;