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
    let community = await Community.findOne({ organisation : org.id }).populateAll();
    let result = await Community.populateStrategy(community, { translation : { language : 1}});

    return exits.success(result);

  }


};
