
module.exports = {

  tableName: 'vendor',
  attributes: {

    translations : {
      collection : 'vendortranslation',
      via : 'vendor',
    },

    organisation : {
      model : 'organisation',
      unique : true,
    }

  }
};

