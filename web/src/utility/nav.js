'use strict';

define(function (require) {
    var navUtility = {},
        jquery = require('jquery');

    /**
     * Navigation Item Activate
     *
     * @param href
     */
    navUtility.activate = function (href) {
        navUtility.deactivate();

        var query = '.nav a[href=\'#/' + href + '\']';
        jquery(query).parent().addClass('active');
    };

    /**
     * Navigation Item Deactivate
     *
     */
    navUtility.deactivate = function () {
        jquery('.nav a').parent().removeClass('active');
    };

    return navUtility;
});