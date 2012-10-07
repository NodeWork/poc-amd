define(function (require, exports) {
    var Base = require('./BaseModel').modelBase,
        m2 = new Base('This is the data for Page 2');
    exports.m2 = m2;
});
