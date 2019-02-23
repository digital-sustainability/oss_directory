/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  /**
   * Route every request except of api and cookie calls to Angular's index.html.
   */
  'get /*': {
    action: 'home',
    skipAssets: true,
    skipRegex: /^(\/api)|(\/__getcookie)/
  },

  /** 
   * Enable CSRF in security config settings
   */
  'get /api/csrf-token': {
    action: "security/grant-csrf-token"
  },

  'get /api/vendor/:id' : 'vendor/find-one', //as action2 is not the same name as the controller action findOne it does not get routed correctly.
  'get /api/product/:id' : 'product/find-one',
  'get /api/client/:id' : 'client/find-one',
  'get /api/community/:id' : 'community/find-one',
  'get /api/successstory/:id' : 'successstory/find-one',
  'get /api/organisation/:id' : 'organisation/find-one',

  'patch /api/vendor/:id' : 'vendor/update-one',
  'patch /api/product/:id' : 'product/update-one',
  'patch /api/client/:id' : 'client/update-one',
  'patch /api/community/:id' : 'community/update-one',
  'patch /api/successstory/:id' : 'successstory/update-one',

  /**
   * Auth routes
   */
  'post /api/register/confirm': 'AuthController.confirm',
  'post /api/login': 'AuthController.login',
  'get /api/check-login': 'AuthController.check-login',
  'post /api/logout': 'AuthController.logout',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝



  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
