const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Event = require('../models/event');
const City = require('../models/city');
const Category = require('../models/category');
const Data = require('../data/data_insert');
 


//Get All Categories
router.get('/', async (req, res, next) => {

    try {
      const results = await Category
      .find()
      .select('_id category category_img');
      res.json(results);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error retrieving categories from database' });
    }
  });
  
  module.exports = router;