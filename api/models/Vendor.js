
module.exports = {

  tableName: 'vendor',
  attributes: {

    title : { type : 'string',} ,

    translations : {
      collection : 'vendortranslation',
      via : 'vendor',
    },

    address : {
      collection : 'address',
      via : 'vendor',
    }
  }
};

