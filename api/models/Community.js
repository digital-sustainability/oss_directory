
module.exports = {

  tableName: 'cummunity',
  attributes: {

    vendors : {
      collection : 'vendor',
      via : 'communities'
    }, 

    clients : {
      collection : 'client',
      via : 'communities'
    },

    organisation : {
      model : 'organisation'
    }

  },

  populateStrategy : async function (community, where) {

    if (!community.organisation) return;

    let org = await Organisation.findOne({ id : community.organisation.id})
      .populate('translations', { where : where.translations })
      .populate('view')
      .populate('address');

    community.organisation = org;
    return community;
  },

  cascadeCreate : async function (community){

    let organisation = await Organisation.cascadeCreate(community.organisation);
    delete community.organisation;

    let result = await Community.create(community).fetch();
    await Community.updateOne({ id : result.id}).set({ organisation : organisation.id });

    return result;

  }
};

