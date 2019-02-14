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

    let results = [];

    for (let org of product.organisations){
      let a = await Organisation.findOne({ id : org.id})
        .populate('translations');
      results.push(a);
    }

    product.organisations = results;

    return exits.success(product);

  }


};
