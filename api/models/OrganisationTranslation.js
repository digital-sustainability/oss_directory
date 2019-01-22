
module.exports = {

  tableName: 'organisation_translation',
  attributes: {

    language : { type : 'string' },
    description : { type : 'string', columnType: 'text',},
    contact : { type : 'string'},
    claim : { type : 'string'},

    organisation : {
      model : 'organisation'
    }

  }
};

