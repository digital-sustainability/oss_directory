module.exports = {


  friendlyName: 'Find one',


  description: '',


  inputs: {

    id : {
      type : 'string'
    }
  },


  exits: {

  },

  fn: async function (inputs, exits) {

    let product = await Product.findOne({title : inputs.id}).populateAll();

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
