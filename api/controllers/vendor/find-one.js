module.exports = {


  friendlyName: 'Find one',


  description: '',


  inputs: {

    id : {
      type: 'ref'
    }

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    //TODO: solve that with join tables later on

    let vendor;
    if (isNaN(inputs.id)){
      let org = await Organisation.findOne({ title : inputs.id });
      vendor = await Vendor.findOne({ organisation : org.id }).populateAll();
    } else {
      vendor = await Vendor.findOne({ id : inputs.id }).populateAll();
    }
    let result = await Vendor.populateStrategy(vendor, { translation : { language : 1}});

    return exits.success(result);

  }


};
