
module.exports = {

  tableName: 'actions',
  attributes: {

    translations : {
      collection : 'clienttranslation',
      via : 'client'
    },

    organisation : {
      model : 'organisation',
      unique : true
    },



  }
};

