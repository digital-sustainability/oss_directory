/**
 * Oss/customer.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'directory_user',
  attributes: {
    title: {
      type: 'string'
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

    //customer is a client of firms
    isClientOf: {
      collection: 'firm',
      via: 'customers'
    },

    //a customer has references
    references: {
      collection: 'reference',
      via: 'customer'
    }
  }
};


/**
 * + **id**
+ hidden
+ **url**
+ business
+ contact_name
+ contact_phone
+ contact_email
+ admin_email
+ **address**
+ **address2**
+ **zip**
+ **city**
+ **cities**
+ **country**
+ **description**
+ description_fr
+ logo
+ feuser_uid
+ counter
+ pid
+ deleted
+ tstamp
+ crdate
+ cruser_id
 */
