
module.exports = {

  tableName: 'product_translation',
  attributes: {

    language   : { model : 'language', required : true},
    description: { type : 'string', columnType: 'text',},
    product: { model : 'product', required : true}

  }
};

