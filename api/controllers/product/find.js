module.exports = {


  friendlyName: 'Find',


  description: 'Find product.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let products = await Product.find()
    .populate('translations', { where : { language : 1}})
    .populate('category');

    return exits.success(products);

  }


};
