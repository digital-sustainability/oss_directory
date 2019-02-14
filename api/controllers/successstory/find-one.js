module.exports = {


  friendlyName: 'Find one',


  description: '',


  inputs: {

    id : { type : 'ref'},

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let success_story;
    if (isNaN(inputs.id)){
      let translation = await SuccessStoryTranslation.findOne({ title : inputs.id});

      success_story = await SuccessStory.findOne({id : translation.success_story})
      .populate('translations', { where : { title : inputs.id }})
      .populate('products')
      .populate('vendor')
      .populate('client');
    } else {
      success_story = await SuccessStory.findOne({ id : inputs.id}).populateAll();
    }

    return exits.success(success_story);
  }


};
