module.exports = {


  friendlyName: 'Find',


  description: 'Find community.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let communities = await Community.find().populateAll();

    let results = [];

    //TODO: rework async function

    //TODO: rework needed : check types and generalize

    //TODO: language param

    //TODO: maybe references and product hints as well

    for (let item of communities){

      let org = await Organisation.findOne({ id : item.organisation.id})
        .populate('translations', { where: { language : 1}})
        .populate('view');

      item.organisation = org;
      results.push(item);
    }

    return exits.success(results);

  }


};
