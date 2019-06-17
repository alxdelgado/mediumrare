const express = require('express');
const router = express.Router();

// const Records = require('../models/records');

// Show all the records
router.get('/', async (req, res, next) => {
   console.log(req.session, 'this is get all inside records controller')
   try {
      const allRecords = await Records.find();

      res.json({
         status: 200,
         data: allRecords
      })
   } catch (err) {
      res.json(err)
   }
});

module.exports = router;
