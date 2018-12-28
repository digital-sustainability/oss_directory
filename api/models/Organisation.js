module.exports = {

  tableName: 'organisation',
  attributes: {

    title : { type : 'string',} ,

    address : {
      collection : 'address',
      via : 'organisation',
    },

    translations : {
      collection : 'organisationtranslation',
      via : 'organisation',
    },

    vendor : {
      collection : 'vendor',
      via : 'organisation',
    },

    client : {
      collection : 'client',
      via : 'organisation',
    },

  }
};

