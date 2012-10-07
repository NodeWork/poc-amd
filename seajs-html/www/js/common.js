//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
//requirejs.config({
//    baseUrl: 'js/lib',
//    paths: {
//        app: '../app'
//    }
//});

seajs.config({
  alias: {
    'jquery': 'https://a.alipayobjects.com/static/arale/jquery/1.7.2/jquery.js'
    //  'jquery': 'jquery.js'
  }

});
