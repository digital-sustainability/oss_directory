module.exports = {


  friendlyName: 'Find one',


  description: '',


  inputs: {

    id : { type : 'ref'}

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let client;
    if (isNaN(inputs.id)){  
      let org = await Organisation.findOne({ title : inputs.id });
      client = await Client.findOne({ organisation : org.id }).populateAll();
    } else {
      client = await Client.findOne({ id : inputs.id}).populateAll();
    }

    let result = await Client.populateStrategy(client, { translation : { language : 1}});

    return exits.success(result);

  }


};
