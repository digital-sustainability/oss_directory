
module.exports = {

  tableName: 'product_translation',
  attributes: {

    language : { type : 'string', defaultsTo : 'EN',},
    description : { type : 'string', columnType: 'text',},

    product : {
      model : 'product'
    }

  }
};

