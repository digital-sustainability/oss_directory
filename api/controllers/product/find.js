module.exports = {


  friendlyName: 'Find',


  description: 'Find product.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var products = await Product.find().populate('translations');

    products = await sails.helpers.json.flat(products, 'translations');

    return exits.success(products);

  }


};
