module.exports = {
    security: {
        cors: {
            allRoutes: true,
            allowOrigins: ['http://localhost:4200'],
            allowCredentials: true,
            allowRequestHeaders: 'content-type,x-csrf-token'
        }
    },

    custom: {
        baseUrl: 'http://localhost:4200'
    },

    datastores: {

        default: {

            /***************************************************************************
            *                                                                          *
            * Want to use a different database during development?                     *
            *                                                                          *
            * 1. Choose an adapter:                                                    *
            *    https://sailsjs.com/plugins/databases                                 *
            *                                                                          *
            * 2. Install it as a dependency of your Sails app.                         *
            *    (For example:  npm install sails-mysql --save)                        *
            *                                                                          *
            * 3. Then pass it in, along with a connection URL.                         *
            *    (See https://sailsjs.com/config/datastores for help.)                 *
            *                                                                          *
            ***************************************************************************/
            adapter: 'sails-mysql',

            //your env connection 
             url: (process.env.OSS_DIRECTORY_URL || require('./local.js').OSS_DIRECTORY_URL),
        
          },
    
      },
}
