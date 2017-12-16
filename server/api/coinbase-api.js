const client = require('coinbase').Client;
const { coinbase_url } = require('../config');
const axios = require('axios');

const getPrices = async () => {
  const config = {
    headers: {'CB-VERSION': 2017-12-11}
  };

  console.log("djkhfdkjfhdjkhdfhdj");
  return await axios.get('https://api.coinbase.com/v2/prices/spot\?currency\=USD', config).then(result => {
      return JSON.stringify(result.data);
  });
}

module.exports = {
    getPrices
}
