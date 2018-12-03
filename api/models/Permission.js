
module.exports = {

  tableName: 'permissions',
  attributes: {

    name: {
      type: 'string',
      required: true,
      unique: true
    },

    roles: {
      collection: 'role',
      via: 'permissions'
    },

    actions: {
      collection: 'action',
      via: 'permissions'
    }
  }
};

