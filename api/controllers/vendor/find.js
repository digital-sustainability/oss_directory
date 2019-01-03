module.exports = {


  friendlyName: 'Find',


  description: 'Find vendor.',


  inputs: {

  },


  exits: {
  },


  fn: async function (inputs, exits) {

    var vendors = await Vendor.find().populate('translations');

    vendors = await sails.helpers.json.flat(vendors, 'translations');

    // sails.log.debug('Running custom `findOne` action.  (Will look up user #'+req.param(\'id\')...');

    // User.findOne({ id: req.param('id') }).omit(['password'])
    // .populate('company', { select: ['profileImageUrl'] })
    // .populate('top8', { omit: ['password'] })
    // .exec(function(err, userRecord) {
    //   if (err) {
    //     switch (err.name) {
    //       case 'UsageError': return res.badRequest(err);
    //       default: return res.serverError(err);
    //     }
    //   }

    //   if (!userRecord) { return res.notFound(); }

    //   if (req.isSocket) {
    //     User.subscribe(req, [user.id]);
    //   }

    //   return res.ok({
    //     model: 'user',
    //     luckyCoolNumber: Math.ceil(10*Math.random()),
    //     record: userRecord
    //   });
    // });

    return exits.success(vendors);

  }


};
