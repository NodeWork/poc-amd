define("modules/module.x",
   ["jquery"],
   function($) {
      console.log("loading module b");
      function debug (data) {
         var debugElem = $("#debug");
         debugElem.append("<p>" + JSON.stringify(data) + "</p>");
      }
      return {
         name: "Module-Common",
         location: "js-modules-module.common.js",
         debug: debug
      };
   }
);

