;(function () {

   curl(
      ['jquery', 'features/modulex'],
      function ($, mx) {
         $(function () {
              mx.debug('SUCCESS: This is file a');
              mx.debug('SUCCESS: module x is: ' + JSON.stringify(mx.obj));
         });
      }
   );

})();
