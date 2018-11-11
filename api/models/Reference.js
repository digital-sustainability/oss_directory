/**
 * Oss/reference.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'directory_reference',
  attributes: {
    title: {
      type: 'string'
    },
    url: {
      type: 'string'
    },

    //references products
    products: {
      collection: 'product',
      via: 'references'
    },

    //a reference has one customer
    customer: {
      model: 'customer'
    },

    //a reference has one firm
    firm: {
      model: 'firm'
    }
  }

};

