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

    let org;
    if (isNaN(inputs.id)){

      org = await Organisation.findOne({title : inputs.id}).populateAll();
    } else {
      org = await Organisation.findOne({ id : inputs.id}).populateAll();
    }
    return exits.success(org);
  }


};
