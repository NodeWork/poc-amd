define(function (require, exports) {
    var Base = require('./BaseModel').modelBase,
        m1 = new Base('This is the data for Page 1');
    exports.m1 = m1;
});
