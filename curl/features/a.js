;(function () {

   curl(
      ['jquery', 'features/modulex'],
      function ($, mx) {
         $(function () {
              write('SUCCESS: jquery $(document).ready(callback) worked');
              write('SUCCESS: module x is: ' + JSON.stringify(mx));
         });
      }
   );

   function write (msg) {
      curl('domReady!', function () {
              document.body.appendChild(document.createElement('div')).innerHTML = msg;
           });
   }


})();
