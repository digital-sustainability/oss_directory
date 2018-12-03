module.exports = {

  tableName: 'roles',
  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },

    permissions: {
      collection: 'permission',
      via: 'roles'
    }

  },
};

