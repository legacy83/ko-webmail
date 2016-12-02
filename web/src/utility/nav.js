'use strict';

define(function (require) {
    var navUtility = {},
        jquery = require('jquery');

    navUtility.activate = function (href) {
        navUtility.deactivate();

        var el = jquery('.nav a[href=\'#/' + href + '\']');
        el.parent().addClass('active');
    };

    navUtility.deactivate = function () {
        var el = jquery('.nav a');
        el.parent().removeClass('active');
    };

    return navUtility;
});