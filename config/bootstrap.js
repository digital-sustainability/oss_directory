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

module.exports.bootstrap = async function (done) {

  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, 
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  await Address.createEach([
    { title : 'Adobe Corp', street : 'flowerstreet', house_number : 101, additional : '', city : 'San Jose', zip : '1010', state : 'California'},
    { title : 'Confluent Corp', street : 'arlingtonstreet', house_number : 202, additional : '', city : 'Palo Alto', zip : '2020', state : 'California'},
    { title : 'Databricks', street : 'huflepuff', house_number : 303, additional : '', city : 'San Francisco', zip : '3030', state : 'California'},
    { title : 'Docker', street : 'chesterfield', house_number : 404, additional : '', city : 'San Francisco', zip : '4040', state : 'California'},
    { title : 'Elastic', street : 'nutmegstreet', house_number : 505, additional : '', city : 'Mountain View', zip : '5050', state : 'California'},
  ]);

  await VendorTranslation.createEach([
    { language : 'EN', description : `Adobe has a strong commitment to open source and has more than 250 public repositories on its GitHub site. 
    Some of its best-known open source projects are developer tools like the PhoneGap web development framework, 
    the Brackets text editor and the Topcoat CSS library. Adobe staff also contribute regularly to other open source projects like 
    Gecko, Blink, WebKit, Apache Cordova, Flex, Felix and many others.`, organisation : 1},
    { language : 'EN', description : `A major player in the big data space, 
    Confluent is the company behind Apache Kafka, which was 20th on that list of most popular open source projects. 
    The company describes Kafka as "a distributed streaming platform capable of handling trillions of events a day." 
    It was originally created at LinkedIn (see below) and was released under an open source license in 2011. 
    The team behind the project founded Confluent as an independent company, and today it offers a commercially supported version of the software.`, organisation : 2},
    { language : 'EN', description : `Databricks is the company that supports another very popular big data streaming project — Apache Spark. 
    The developers that founded the project started Databricks in 2013 to offer commercial support for the effort. According to the company, 
    Spark has the "largest open source community in big data, with over 1,000 contributors from 250+ organizations." 
    Well-known Databricks customers include NBCUniversal, HP, Shell, Cisco, 3M and many others.`, organisation : 3},
    { language : 'EN', description : `Over the last few years, 
    the Docker containerization technology has emerged as one of the most influential open source projects for enterprise users. 
    It has more than 32,000 stars on GitHub and has been downloaded more than 8 billion times. 
    The company behind the technology, also named Docker, was listed third on the list of companies with the most GitHub contributors in 2016. 
    The Docker software is very popular with companies using agile and DevOps approaches, and the company claims, 
    "On average companies using Docker experience a 7X improvement in how frequently they are able to ship software."`, organisation : 4},
    { language : 'EN', description : `Best known for its open source Elasticsearch project, 
    Elastic offers a complete stack of products designed that can "reliably and securely take data from any source, 
    in any format, and search, analyze, and visualize it in real time." Elasticsearch ranked seventh on the index of popular open source projects, 
    and it has 25,254 stars on GitHub. Elastic also has several other open source projects, including Kibana, Beats and Logstash.`, organisation : 5},
  ]);
  
  await Vendor.createEach([
    { title : 'Adobe', address : 1, translations : [1]},
    { title : 'Confluent', address : 2, translations : [2]},
    { title : 'Databricks', address : 3, translations : [3]},
    { title : 'Docker', address : 4, translations : [4]},
    { title : 'Elastic', address : 5, translations : [5]},
  ]);


  await Product.createEach([
    { title : 'RedHat',},
    { title : 'Linux',},
    { title : 'Docker',},
    { title : 'Couchbase',},
    { title : 'Xamarin',},
    { title : 'ElasticSearch',},
    { title : 'mariaDB',},
    { title : 'Sails',},
    { title : 'RubyOnRails',},
  ]);

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
