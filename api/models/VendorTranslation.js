
module.exports = {

  tableName: 'vendor_translation',
  attributes: {

    language : { type : 'string', defaultsTo : 'EN',},
    description : { type : 'string', columnType: 'text',},

    vendor : {
      model : 'vendor'
    }

  }
};

