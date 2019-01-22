/**
 * Oss/product.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'product',
  attributes: {

    logo_vector : {
      type : 'string'
    },

    logo_pixel : {
      type : 'string',
    },

    source_code_link : {
      type : 'string',
    },

    links : {
      type : 'string'
    },

    user : {
      model : 'user',
    },

    category : {
      model : 'category'
    },

    title: { type: 'string' },

    organisations : {
      collection : 'organisation',
      via : 'products'
    },

    success_stories : {
      collection : 'successstory',
      via : 'products'
    },

    view : {
      model : 'view'
    },

    translations : {
      collection : 'producttranslation',
      via : 'product'
    },
  }
};