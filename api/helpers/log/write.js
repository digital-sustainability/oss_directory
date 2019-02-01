module.exports = {

        friendlyName : 'write',

        description : 'writes a log entry to a locale file',

        inputs : {
                localeFilePath : {
                        type : 'string',
                        required : true,
                },

                log : {
                        type : 'string',
                        required : true,
                        
                }
        },

        exits : {},

        fn: async function(inputs, exits){}
};


