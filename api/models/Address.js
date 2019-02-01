module.exports = {

  tableName: 'address',
  attributes: {

    title       : { type: 'string',},
    street      : { type: 'string', required : true },
    house_number: { type: 'string', required : true },
    additional  : { type: 'string',},
    city        : { type: 'string', required : true },
    zip         : { type: 'number', required : true },
    state       : { type : 'string',},

  }
};

