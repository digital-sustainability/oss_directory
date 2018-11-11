/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */


module.exports.bootstrap = async function(done) {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return done();
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```
  
  await Customer.destroy({});
  await Firm.destroy({});
  await Product.destroy({});
  await Reference.destroy({});

  await Customer.createEach([
    { title: 'customer1', url: 'www.customer1.ch', isClientOf: [1,2], references: [1]},
    { title: 'customer2', url: 'www.customer2.ch', isClientOf: [1,2]},
    { title: 'customer3', url: 'www.customer3.ch', isClientOf: [1,2]},
    { title: 'customer4', url: 'www.customer4.ch', isClientOf: [1,2]},
    { title: 'customer5', url: 'www.customer5.ch', isClientOf: [1,2]}
  ]);

  await Firm.createEach([
    { id: 1, title: 'firm1', url: 'www.firm1.ch', services: [1,2,3], references: [1]},
    { id: 2, title: 'firm2', url: 'www.firm2.ch', services: [1,2,3], references: [2]},
    { title: 'firm3', url: 'www.firm3.ch', services: [1,2,3], references: [3]},
    { title: 'firm4', url: 'www.firm4.ch', services: [1,2,3], references: [4]},
    { title: 'firm5', url: 'www.firm5.ch', customers: [3,4], services: [1,2,3], references: []},
  ]);

  await Product.createEach([
    { title: 'product1', providers: [1,3], references: [2,1]},
    { title: 'product2', providers: [1,4], references: [3]},
    { title: 'product3', providers: [2,3], references: [1]},
    { title: 'product4', providers: [4,3], references: [2]},
    { title: 'product5', providers: [2,4], references: [4]},
  ]);

  await Reference.createEach([
    { title: 'reference1'},
    { title: 'reference2'},
    { title: 'reference3'},
    { title: 'reference4'},
    { title: 'reference5'},
    { title: 'reference6'},
    { title: 'reference7'},
  ]);

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
