
module.exports = {

  tableName: 'actions',
  attributes: {

    path  : {type: 'string', required: true,},
    method: { type: 'string', required: true,},
    access: { type: 'string', },

    permissions: {
      collection: 'permission',
      via: 'actions'
    },

  }
};

