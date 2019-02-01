
module.exports = {

  tableName: 'organisation_translation',
  attributes: {

    language   : { model : 'language', required : true },
    description: { type : 'string', columnType: 'text',},
    contact    : { type : 'string'},
    claim      : { type : 'string', columnType : 'text'},
    organisation: { model : 'organisation', required : true },

  }
};

