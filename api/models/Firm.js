/**
 * Oss/firm.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'directory_firm',
  attributes: {
    title: {
      type: 'string',
      required: true
    },
    url: {
      type: 'string'
    },
    contact_name: {
      type: 'string'
    },
    contact_email: {
      type: 'string'
    },
    contact_phone: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    address2: {
      type: 'string'
    },
    zip: {
      type: 'number'
    },
    city: {
      type: 'string'
    },
    description: {
      type: 'string'
    },

    //firm has a collection of customers
    customers: {
      collection: 'customer',
      via: 'isClientOf'
    },

    //a firm provides services for products
    services: {
      collection: 'product',
      via: 'provider'
    },

    //a firm has references
    references: {
      collection: 'reference',
      via: 'firm'
    }
  }, 

};