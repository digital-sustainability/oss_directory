
module.exports = {

  tableName: 'vendor',
  attributes: {

    website     : { type: 'string', },
    locations   : { type: 'string', },
    employee_num: { type: 'number', },

    success_stories: { 
      collection: 'successstory',
      via       : 'vendor',
    },

    communities: { 
      collection: 'community',
      via       : 'vendors',
    },

    organisation: 
    {
      model   : 'organisation',
      required: true,
    },
  },

  populateStrategy: async function (vendor, where) {
    if (!vendor.organisation) return;
    if (!vendor.organisation.id) return;
    let org = await Organisation.findOne({ id: vendor.organisation.id })
      .populate('translations', { where: where.translations })
      .populate('view')
      .populate('address');

    vendor.organisation = org;

    return vendor;
  }
};

