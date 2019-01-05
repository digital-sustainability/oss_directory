module.exports = {


  friendlyName: 'Find one',


  description: '',


  inputs: {
    id : {
      type : 'number'
    }

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var product = await Product.findOne({id : inputs.id}).populate('translations');

    product = await sails.helpers.json.flat([product], 'translations');

    return exits.success(product);

  }


};
