module.exports = {


  friendlyName: 'Test',


  description: 'Test neo.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    
    const options = {  
      url: 'http://0.0.0.0:3003/',
      method: 'POST',
      body: this.req.body,
      json: true,
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8'
      }
    };

    var request = require('request');
    request(options, function (error, response, body) {
      return exits.success(body);
    });

  }


};
