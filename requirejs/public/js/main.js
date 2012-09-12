require(["jquery", "plugins/jquery.a", "plugins/jquery.b"], function($) {

    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
   $(function() {
      console.log("main.js: dom ready");
      $('body').alpha().beta();
   });

});
