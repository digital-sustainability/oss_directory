/**
 * Oss/reference.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'industry',
  attributes: {
    title: { type: 'string', unique : true, required : true },
  }

};
