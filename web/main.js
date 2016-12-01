'use strict';

require.config({
    paths: {
        'jquery': ['vendor/npm/jquery/dist/jquery'],
        'sammy': ['vendor/npm/sammy/lib/sammy'],
        'text': ['vendor/npm/requirejs-text/text']
    }
});

define(function (require) {
    var jquery = require('jquery'),
        sammyApp = require('src/sammy.app');

    jquery(document).ready(function () {
        sammyApp.run('#/');
    });
});