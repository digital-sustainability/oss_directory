module.exports = {


  friendlyName: 'Test',


  description: 'Test neo.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    const json = JSON.stringify({ "query": "{ Movie { title } }" });
    const options = {  
      url: 'http://0.0.0.0:3003/',
      method: 'POST',
      body: json,
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8'
      }
    };
  

    var request = require('request');
    request(options, function (error, response, body) {
      sails.log.info('error:', error); // Print the error if one occurred
      sails.log.info('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      sails.log.info('body:', body); // Print the HTML for the Google homepage.
      return exits.success(body);
    });

  }


};
