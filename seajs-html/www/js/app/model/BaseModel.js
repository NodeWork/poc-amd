define(function (require, exports) {
    function modelBase(title) {
        this.title = title;
    }

    modelBase.prototype = {
        getTitle: function () {
            return this.title;
        }
    };

    exports.modelBase = modelBase;
});
