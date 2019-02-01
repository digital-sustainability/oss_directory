
module.exports = {

  tableName: 'organisation',
  attributes: {

    title      : { type : 'string', unique : true, required : true },
    address    : { model : 'address' },
    logo_vector: { type : 'string', },
    logo_pixel : { type : 'string', },
    view       : { model : 'view' },

    translations : {
      collection: 'organisationtranslation',
      via       : 'organisation'
    },

    users : {
      collection: 'user',
      via       : 'organisation'
    },

    products : {
      collection: 'product',
      via       : 'organisations'
    }
  },
};

