module.exports = {


  friendlyName: 'Find',


  description: 'Find client.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let clients = await Client.find().populateAll();

    let results = [];

    //TODO: rework async function

    //TODO: rework needed : check types and generalize

    //TODO: language param

    //TODO: maybe references and product hints as well

    for (let item of clients){

      let org = await Organisation.findOne({ id : item.organisation.id})
        .populate('translations', { where: { language : 'EN'}})
        .populate('view');

      item.organisation = org;
      results.push(item);
    }

    return exits.success(results);

  }


};
