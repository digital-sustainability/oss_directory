
module.exports = {

  tableName: 'success_story_translation',
  attributes: {

    language : { type : 'string', defaultsTo : 'EN',},
    title : { type : 'string'},
    lead : { type : 'string', columnType: 'text',},
    base : { type : 'string', columnType: 'text',},
    goal : { type : 'string', columnType: 'text',},
    proposal : { type : 'string', columnType: 'text',},

    outcome : { type : 'string', columnType: 'text',},


    success_story : {
      model : 'successstory'
    }

  }
};

