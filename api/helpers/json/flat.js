module.exports = {


  friendlyName: 'Flat',


  description: 'Flat json.',


  inputs: {
    json : {
      type : 'json'
    },
    attribute : {
      type : 'string'
    }

  },

  exits: {

  },


  fn: async function (inputs, exits) {

    

    //flatten json
    //works for now 
    //try db views or native query
    inputs.json.forEach(element => {
      let att = element[inputs.attribute][0];
      if (att) {
        for (var key in att){
          if (!element[key]){
            element[key] = att[key];
          }
        }
        delete element[inputs.attribute];
      }
    });

    return exits.success(inputs.json);

  }


};

