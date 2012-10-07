define(function (require, exports) {
    var Base = require('./BaseController').controllerBase,
        c2 = new Base('Controller 2');
    exports.c2 = c2;
});
