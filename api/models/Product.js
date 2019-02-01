/**
 * Oss/product.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'product',
  attributes: {

    logo_vector     : { type : 'string' },
    logo_pixel      : { type : 'string', },
    source_code_link: {type : 'string',},
    links           : { type : 'string'},
    title           : { type: 'string', required : true },
    category        : { model : 'category', required : true },
    view            : { model : 'view' },

    organisations : {
      collection: 'organisation',
      via       : 'products'
    },

    success_stories : {
      collection: 'successstory',
      via       : 'products'
    },

    translations : {
      collection: 'producttranslation',
      via       : 'product'
    },
  }
};