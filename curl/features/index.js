;(function () {

   var $readyWorked, $docReadyWorked, $Worked;

   curl(
	  ['jquery'],
	  function ($) {
		 $().ready(function () {
				      write('SUCCESS: jquery $().ready(callback) worked');
				      $readyWorked = true;
			       });
		 $(document).ready(function () {
				              write('SUCCESS: jquery $(document).ready(callback) worked');
				              $docReadyWorked = true;
			               });
		 $(function () {
			  write('SUCCESS: jquery $(callback) worked');
			  $Worked = true;
		   });
	  },
	  function (ex) {
		 write('ERROR: ' + ex.message);
	  }
   );

   function write (msg) {
	  curl('domReady!', function () {
			  document.body.appendChild(document.createElement('div')).innerHTML = msg;
		   });
   }


})();
