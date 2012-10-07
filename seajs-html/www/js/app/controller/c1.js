define(function (require, exports) {
    var Base = require('./BaseController').controllerBase,
        c1 = new Base('Controller 1');

    exports.c1 = c1;
});
