module.exports = {


  friendlyName: 'Find one',


  description: '',


  inputs: {
    id : {
      type : 'number'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var vendor = await Vendor.findOne({id : inputs.id}).populate('translations');

    vendor = await sails.helpers.json.flat([vendor], 'translations');
    return exits.success(vendor);

  }


};
