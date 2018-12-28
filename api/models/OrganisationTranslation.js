
module.exports = {

  tableName: 'organisation_translation',
  attributes: {

    language : { type : 'string', defaultsTo : 'EN' },
    description : { type : 'string' , columnType: 'text',},

    organisation : {
      model : 'organisation',
    },


  }
};

