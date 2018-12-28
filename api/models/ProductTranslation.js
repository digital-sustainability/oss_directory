/**
 * Oss/product.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'product_translation',
  attributes: {
   
    url: { type: 'string' },
    category_uid: { type: 'number' },
    description: { type: 'string' ,columnType: 'text',},
    language : { type : 'string', defaultsTo : 'EN', }, 

    product : {
      model : 'product'
    }
  }
};