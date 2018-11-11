/**
 * Oss/product.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'directory_product',
  attributes: {
    title: {
      type: 'string'
    },
    url: {
      type: 'string'
    },

    //product is referenced
    references: {
      collection: 'reference',
      via: 'products'
    },

    //a firm provides a service for this product
    provider: {
      collection: 'firm',
      via: 'services'
    }
  }
};

/**
 *  **id**
+ hidden
+ **title**
+ title_fr
+ oldkey
+ category_uid
+ **description**
+ description_fr
+ logo
+ links
+ download_url
+ feuser_uid
+ creator_name
+ creator_email
+ counter
+ osi_certified
+ chopen_rating
+ functionality_rating
+ maturity_rating
+ community_rating
+ trend_rating
+ pid
+ deleted
+ tstamp
+ crdate
+ cruser_id
 */

