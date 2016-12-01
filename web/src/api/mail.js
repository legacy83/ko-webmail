'use strict';

define(function (require) {
    var api = {},
        _ = require('lodash'),
        jquery = require('jquery');

    var filterById = function (mails, mailId) {
        return _.filter(mails, {id: parseInt(mailId)});
    };

    var filterByFolder = function (mails, folder) {
        return _.filter(mails, {folder: folder});
    };

    api.get = function (mailId) {
        var deferred = jquery.Deferred();
        jquery.get('/data/mail.json', function (data) {
            deferred.resolve(filterById(data.mails, mailId)[0]);
        });

        return deferred.promise();
    };

    api.findByFolder = function (folder) {
        var deferred = jquery.Deferred();
        jquery.get('/data/mail.json', function (data) {
            deferred.resolve({
                id: folder,
                mails: filterByFolder(data.mails, folder)
            });
        });

        return deferred.promise();
    };

    return api;
});