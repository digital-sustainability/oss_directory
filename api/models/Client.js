
module.exports = {

  tableName: 'client',
  attributes: {

    title : { type : 'string',} ,

    translations : {
      collection : 'clienttranslation',
      via : 'client'
    },

  }
};

