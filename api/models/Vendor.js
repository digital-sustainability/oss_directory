
module.exports = {

  tableName: 'vendor',
  attributes: {

    website : { type : 'string',} ,
    locations : { type : 'string'},
    employee_num : {
      type : 'number'
    },

    success_story : {
      collection : 'successstory',
      via : 'vendor',
    },

    communities : {
      collection : 'community',
      via : 'vendors'
    },

    organisation : {
      model : 'organisation'
    }

  },

  populateStrategy : async function (vendor, where) {
    if (!vendor.organisation) return;
    let org = await Organisation.findOne({ id : vendor.organisation.id})
      .populate('translations', { where : where.translations })
      .populate('view')
      .populate('address');

    vendor.organisation = org;
    return vendor;
  },

  cascadeCreate : async function (vendor){

    let organisation = await Organisation.cascadeCreate(vendor.organisation);
    delete vendor.organisation;

    let result = await Vendor.create(vendor).fetch();
    await Vendor.updateOne({ id : result.id}).set({ organisation : organisation.id });

    return result;

  }
};

