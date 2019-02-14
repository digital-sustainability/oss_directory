
module.exports = {

  tableName: 'action',
  attributes: {

    path  : {type: 'string', required: true,},
    method: { type: 'string', required: true,},
    access: { type: 'string', },

    permission: {
      model: 'permission'
    },

  }
};

