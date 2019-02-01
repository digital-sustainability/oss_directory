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

    //TODO: solve that with join tables later on

    let org = await Organisation.findOne({ title : inputs.id });
    let vendor = await Vendor.findOne({ organisation : org.id }).populateAll();
    let result = await Vendor.populateStrategy(vendor, { translation : { language : 1}});

    return exits.success(result);

  }


};
