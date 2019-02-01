module.exports = {


  friendlyName: 'Find',


  description: 'Find vendor.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let vendors = await Vendor.find().populateAll();

    let results = [];

    //TODO: rework async function

    //TODO: rework needed : check types and generalize

    //TODO: language param

    //TODO: maybe references and product hints as well

    for (let item of vendors){
      item = await Vendor.populateStrategy(item, { translation : { language : 1}})
      results.push(item);
    }

    return exits.success(results);
  }
};
