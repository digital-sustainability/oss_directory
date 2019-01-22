module.exports = {


  friendlyName: 'Find one',


  description: '',


  inputs: {

    id : { type : 'string'},

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let translation = await SuccessStoryTranslation.findOne({ title : inputs.id});

    let success_story = await SuccessStory.findOne({id : translation.success_story})
      .populate('translations', { where : { title : inputs.id }})
      .populate('products')
      .populate('vendor')
      .populate('client');

    return exits.success(success_story);


  }


};
