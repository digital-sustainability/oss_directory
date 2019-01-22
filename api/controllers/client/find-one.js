module.exports = {


  friendlyName: 'Find one',


  description: '',


  inputs: {

    id : { type : 'string'}

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let org = await Organisation.findOne({ title : inputs.id });
    let vendor = await Client.findOne({ organisation : org.id }).populateAll();
    let result = await Client.populateStrategy(vendor, { translation : { language : 'EN'}});

    return exits.success(result);

  }


};
