define(function (require, exports) {
    function controllerBase(id) {
        this.id = id;
    }

    controllerBase.prototype = {
        setModel: function (model) {
            this.model = model;
        },

        render: function (bodyDom) {
            bodyDom.prepend('<h1>Controller ' + this.id + ' says "' +
                      this.model.getTitle() + '"</h2>');
        }
    };

    exports.controllerBase = controllerBase;
});