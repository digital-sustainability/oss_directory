
module.exports = {

  tableName: 'client',
  attributes: {

    industry : {
      model : 'industry'
    },

    communities : {
      collection : 'community',
      via : 'clients',
    },

    sucess_story : {
      collection : 'successstory',
      via : 'client',
    },

    organisation : {
      model : 'organisation'
    }, 

    
  },

  populateStrategy : async function (client, where) {

    if (client.organisation) return;

    let org = await Organisation.findOne({ id : client.organisation.id})
      .populate('translations', { where : where.translations })
      .populate('view')
      .populate('address');

    client.organisation = org;
    return client;
  },

  cascadeCreate : async function (client){

    let organisation = await Organisation.cascadeCreate(client.organisation);
    delete client.organisation;

    let result = await Client.create(client).fetch();
    await Client.updateOne({ id : result.id}).set({ organisation : organisation.id });

    return result;

  }
};

