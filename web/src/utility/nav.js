'use strict';

define(function (require) {
    var navUtility = {},
        jquery = require('jquery');
    
    navUtility.activate = function (href) {
        navUtility.deactivate();

        var query = '.nav a[href=\'#/' + href + '\']';
        jquery(query).parent().addClass('active');
    };

    navUtility.deactivate = function () {
        jquery('.nav a').parent().removeClass('active');
    };

    return navUtility;
});