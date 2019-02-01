
module.exports = {

  tableName: 'client',
  attributes: {

    industry    : { model : 'industry' },
    organisation: { model : 'organisation', required : true, unique : true },

    communities : {
      collection: 'community',
      via       : 'clients',
    },

    sucess_story : {
      collection: 'successstory',
      via       : 'client',
    },

   

    
  },

  populateStrategy : async function (client, where) {

    if (!client.organisation) return;
    if (!client.organisation.id) return;

    let org = await Organisation.findOne({ id : client.organisation.id})
      .populate('translations', { where : where.translations })
      .populate('view')
      .populate('address');

    client.organisation = org;
    return client;
  }
};

