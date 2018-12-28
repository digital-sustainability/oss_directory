/**
 * Oss/reference.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'reference_translation',
  attributes: {
   
    language : { type : 'string', defaultsTo : 'EN',},
    url: {
      type: 'string'
    },
    description: {
      type: 'string', columnType: 'text',
    },

    reference : {
      model : 'reference',
    }
  }

};

