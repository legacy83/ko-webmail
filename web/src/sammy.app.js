'use strict';

define(function (require) {
    var sammy = require('sammy'),
        jquery = require('jquery');

    var WebmailViewModel = function () {
        var self = this;
    };

    return sammy('#main', function () {

        this.get('#/', function () {
            jquery(".nav a").parent().removeClass('active');
            jquery(".nav a[href='#/']").parent().addClass('active');
            this.$element().html(require('text!src/pages/home/home.html'));
        });

        this.get('#/about', function () {
            jquery(".nav a").parent().removeClass('active');
            jquery(".nav a[href='#/about']").parent().addClass('active');
            this.$element().html(require('text!src/pages/about/about.html'));
        });

    });
});