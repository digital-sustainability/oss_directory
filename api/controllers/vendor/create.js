
module.exports = {


  friendlyName: 'Create',


  description: 'Create vendor.',


  inputs: {
    title : { type : 'string'},
    description : { type : 'string'},
    
  },

  exits: {

  },


  fn: async function (inputs, exits) {

    sails.log.info(inputs);

    var vendor = await Vendor.create(inputs).fetch();
    var vendor_translation = await VendorTranslation.create(inputs).fetch();
    return exits.success();

  }


};
