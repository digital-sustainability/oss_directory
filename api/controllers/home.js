module.exports = {


  friendlyName: 'Home',


  description: 'Home something.',


  inputs: {
    lang : {
      type : "string",

    }

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/homepage'
    }

  },


  fn: async function (inputs, exits) {

    switch (this.req.getLocale()) {
      case "en":
        return exits.success({path_to_index : '../../assets/en/index.html'});

      case "de":
        return exits.success({path_to_index : '../../assets/de/index.html'});

      case "fr":
        return exits.success({path_to_index : '../../assets/fr/index.html'});

      default:
        return exits.success({path_to_index : '../../assets/en/index.html'});
    }
   

  }


};
