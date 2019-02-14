module.exports = {


  friendlyName: 'Find one',


  description: '',


  inputs: {

    id : { type : 'ref'}

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let community;
    if(isNaN(inputs.id)){

      let org = await Organisation.findOne({ title : inputs.id });
      community = await Community.findOne({ organisation : org.id }).populateAll();
    } else {
      community = await Community.findOne({ id : inputs.id}).populateAll();
    }
    let result = await Community.populateStrategy(community, { translation : { language : 1}});

    return exits.success(result);

  }


};
