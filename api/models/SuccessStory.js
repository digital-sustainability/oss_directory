/**
 * Oss/reference.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'success_story',
  attributes: {

    view: {model : 'view',},
    client: {model : 'client', required: true},
    vendor: {model : 'vendor',},

    products : {
      collection: 'product',
      via       : 'success_stories'
    },

    translations : {
      collection: 'successstorytranslation',
      via       : 'success_story',
    }
  }

};

