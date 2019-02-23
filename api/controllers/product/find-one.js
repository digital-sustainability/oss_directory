module.exports = {


  friendlyName: 'Find one',


  description: '',


  inputs: {

    id : {
      type : 'ref'
    }
  },


  exits: {

  },

  fn: async function (inputs, exits) {

    let product;
    if (isNaN(inputs.id)){

      product = await Product.findOne({title : inputs.id}).populateAll();
    } else {
      product = await Product.findOne({ id : inputs.id}).populateAll();
    }

    return exits.success(product);

  }


};
