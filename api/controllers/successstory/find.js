module.exports = {


  friendlyName: 'Find',


  description: 'Find success story.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let success_stories = await SuccessStory.find()
      .populate('translations', { where : { language : 1}})
      .populate('products');

    return exits.success(success_stories);

  }


};
