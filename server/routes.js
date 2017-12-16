const express = require('express');

const { getPrices } = require('./api/coinbase-api');

const router = express.Router();

router.get('/getPrice', (req, res) => {
    getPrices().then(result => {
      const { data } = JSON.parse(result);
      console.log("result", data);
      return res.send(result);
  });

});

module.exports = router;
