define(
   [],
   function () {
      var obj = { name: 'moduleX',
                  like: 'curl lib'
                };
      function write (msg) {
         document.body.appendChild(document.createElement('div')).innerHTML = msg;
      }

      return { obj: obj
             , debug: write
             };
});
