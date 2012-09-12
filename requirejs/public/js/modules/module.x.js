define("modules/module.x",
   ["jquery"],
   function($) {

      console.log("loading module X");

      function debug (data) {
         var debugElem = $("#debug");
         debugElem.append("<p>" + JSON.stringify(data) + "</p>");
      }

      return {
         name: "Module-Common",
         location: "js.modules.module.x.js",
         debug: debug
      };

   }
);

