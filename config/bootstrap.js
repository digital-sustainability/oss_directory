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

  await Language.createEach([
    { name : 'EN'},
    { name : 'DE'},
    { name : 'FR'}
  ]);

  await Category.createEach([
    { title : 'CRM'},
    { title : 'Cloud Storage'},
    { title : 'ERP'}
  ]);

  await Industry.createEach([
    { title : 'ICT'},
    { title : 'Behörden'},
  ]);

  await Address.createEach([
    { street : 'Aarbergstrasse', house_number : 4, city : 'Biel', zip : 2503, state : 'Bern'},
    { street : 'Münstergasse', house_number : 32, city : 'Bern', zip : 3002, state : 'Bern'},
    { street : 'Langstrasse', house_number : 15, city : 'Zürich', zip : 5023, state : 'Zürich'},
    { street : 'Hasliweg', house_number : 1, city : 'Chur', zip : 4123, state : 'Luzern'},
    { street : 'Strandweg', house_number : 50, city : 'Biel', zip : 2504, state : 'Bern'},
  ]);

  await Organisation.createEach([
    { title : 'Adobe', address : 1},
    { title : 'Confluent', address : 2},
    { title : 'Databricks', address : 3},
    { title : 'Docker', address : 4},
    { title : 'Ubuntu', address : 5},
    
  ]);

  await OrganisationTranslation.createEach([
    { language : 1, description : `Adobe has a strong commitment to open source and has more than 250 public repositories on its GitHub site. 
    Some of its best-known open source projects are developer tools like the PhoneGap web development framework, 
    the Brackets text editor and the Topcoat CSS library. Adobe staff also contribute regularly to other open source projects like 
    Gecko, Blink, WebKit, Apache Cordova, Flex, Felix and many others.`, contact : 'hans peter', organisation : 1},
    { language : 1, description : `A major player in the big data space, 
    Confluent is the company behind Apache Kafka, which was 20th on that list of most popular open source projects. 
    The company describes Kafka as "a distributed streaming platform capable of handling trillions of events a day." 
    It was originally created at LinkedIn (see below) and was released under an open source license in 2011. 
    The team behind the project founded Confluent as an independent company, and today it offers a commercially supported version of the software.`, organisation : 2},
    { language : 1, description : `Databricks is the company that supports another very popular big data streaming project — Apache Spark. 
    The developers that founded the project started Databricks in 2013 to offer commercial support for the effort. According to the company, 
    Spark has the "largest open source community in big data, with over 1,000 contributors from 250+ organizations." 
    Well-known Databricks customers include NBCUniversal, HP, Shell, Cisco, 3M and many others.`, contact : 'ueli', organisation : 3},
    { language : 1, description : `Over the last few years, 
    the Docker containerization technology has emerged as one of the most influential open source projects for enterprise users. 
    It has more than 32,000 stars on GitHub and has been downloaded more than 8 billion times. 
    The company behind the technology, also named Docker, was listed third on the list of companies with the most GitHub contributors in 2016. 
    The Docker software is very popular with companies using agile and DevOps approaches, and the company claims, 
    "On average companies using Docker experience a 7X improvement in how frequently they are able to ship software."`, contact : 'ruedi' ,organisation : 4},
    { language : 1, description : `Best known for its open source Elasticsearch project, 
    Elastic offers a complete stack of products designed that can "reliably and securely take data from any source, 
    in any format, and search, analyze, and visualize it in real time." Elasticsearch ranked seventh on the index of popular open source projects, 
    and it has 25,254 stars on GitHub. Elastic also has several other open source projects, including Kibana, Beats and Logstash.`, organisation : 5},
  ]);

  await Vendor.createEach([
    { website : 'www.google.ch', locations : 'bern, zürich, lengnau', employee_num : 15, organisation : 1 },
    { website : 'www.slack.com', locations : 'timbuktu', employee_num : 10, organisation : 2 },
  ]);

  await Client.createEach([
    { industry : 1, organisation : 3},
    { industry : 2, organisation : 4},
  ]);

  await Community.createEach([
    { organisation : 5, clients : [1,2], vendors : [1,2]}
  ]);


  await Product.createEach([
    { source_code_link : 'www.linktosource.com', links : 'some other links', category : 1, title : 'RedHat', organisations : [1,2,3]},
    { source_code_link : 'www.linktosource.com', links : 'some other links', category : 1, title : 'Linux', organisations : [1,2,3]},
    { source_code_link : 'www.linktosource.com', links : 'some other links', category : 1, title : 'Docker', organisations : [1,2,3]},
    { source_code_link : 'www.linktosource.com', links : 'some other links', category : 1, title : 'Couchbase', organisations : [2,3,4]},
    { source_code_link : 'www.linktosource.com', links : 'some other links', category : 1, title : 'ElasticSearch', organisations : [1,5]},
    { source_code_link : 'www.linktosource.com', links : 'some other links', category : 1, title : 'Sails', organisations : [3]},
  ]);

  await ProductTranslation.createEach([
    { language : 1, description : lorem, product : 1},
    { language : 2, description : lorem, product : 1},
    { language : 3, description : 'quoi', product : 1},
    { language : 1, description : lorem, product : 2},
    { language : 1, description : lorem, product : 3},
    { language : 1, description : lorem, product : 4},
    { language : 1, description : lorem, product : 5},
    { language : 1, description : lorem, product : 6},
  ]);

  await SuccessStory.createEach([
    { products : [1,4,6], client : 1, vendor : 1},
    { products : [1,2], client : 2, vendor : 2},
    { products : [3], client : 1},
    { products : [2,5], client : 2}
  ]);

  await SuccessStoryTranslation.createEach([
    { title : 'title1', language : 1, lead : lorem, base : lorem, goal : lorem, proposal : lorem, outcome : lorem, success_story : 1},
    { title : 'title2', language : 2 , lead : lorem, base : lorem, goal : lorem, proposal : lorem, outcome : lorem, success_story : 1},
    { title : 'title3', language : 1, lead : lorem, base : lorem, goal : lorem, proposal : lorem, outcome : lorem, success_story : 2},
    { title : 'title4', language : 1, lead : lorem, base : lorem, goal : lorem, proposal : lorem, outcome : lorem, success_story : 3},
    { title : 'title5', language : 1, lead : lorem, base : lorem, goal : lorem, proposal : lorem, outcome : lorem, success_story : 4},
  ]);

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
