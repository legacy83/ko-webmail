'use strict';

require.config({
    paths: {
        'jquery': ['vendor/npm/jquery/dist/jquery'],
        'knockout': ['vendor/npm/knockout/build/output/knockout-latest'],
        'lodash': ['vendor/npm/lodash/lodash'],
        'sammy': ['vendor/npm/sammy/lib/sammy'],
        'text': ['vendor/npm/requirejs-text/text']
    },
    urlArgs: "bust=" + (new Date()).getTime()
});

define(function (require) {
    var jquery = require('jquery'),
        sammyApp = require('src/sammy.app');

    jquery(document).ready(function () {
        sammyApp.run('#/Inbox');
    });
});