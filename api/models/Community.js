
module.exports = {

  tableName: 'cummunity',
  attributes: {

    organisation: { model: 'organisation'},

    vendors : {
      collection: 'vendor',
      via       : 'communities'
    }, 

    clients : {
      collection: 'client',
      via       : 'communities'
    },

    

  },

  populateStrategy : async function (community, where) {

    if (!community.organisation) return;
    if (!community.organisation.id) return;

    let org = await Organisation.findOne({ id : community.organisation.id})
      .populate('translations', { where : where.translations })
      .populate('view')
      .populate('address');

    community.organisation = org;
    return community;
  }
};

