
module.exports = {

  tableName: 'organisation',
  attributes: {

    title : {
      type : 'string',
      unique : true,
    },

    address : {
      model : 'address'
    }, 

    logo_vector : {
      type : 'string',
    },

    logo_pixel : {
      type : 'string',
    },

    translations : {
      collection : 'organisationtranslation',
      via : 'organisation'
    },

    view : {
      model : 'view'
    },

    users : {
      collection : 'user',
      via : 'organisation'
    },

    products : {
      collection : 'product',
      via : 'organisations'
    }
  },


  cascadeCreate : async function (org){

    let translation_ids = []
    for (let translation of org.translations){
      let record = await OrganisationTranslation.create(translation).fetch();
      translation_ids.push(record.id);
    }
    delete org.translations;

    let address = await Address.create(org.address).fetch();
    delete org.address;

    let organisation = await Organisation.create(org).fetch();
    await Organisation.updateOne({ id : organisation.id }).set({ address : address.id });
    await Organisation.addToCollection(organisation.id, 'translations').members(translation_ids);



    return organisation;

  }
};

