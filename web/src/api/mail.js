'use strict';

define(function (require) {
    var api = {},
        jquery = require('jquery');

    var filterMailById = function (mails, mailId) {
        var found = null;
        jquery.each(mails, function (index, val) {
            if (val.id == mailId) found = val;
        });

        return found;
    };

    var filterMailByFolder = function (mails, folder) {
        var found = [];
        jquery.each(mails, function (index, val) {
            if (val.folder == folder) found.push(val);
        });

        return found;
    };

    api.get = function (mailId) {
        var deferred = jquery.Deferred();
        jquery.get('/data/mail.json', function (data) {
            deferred.resolve(filterMailById(data.mails, mailId));
        });

        return deferred.promise();
    };

    api.findByFolder = function (folder) {
        var deferred = jquery.Deferred();
        jquery.get('/data/mail.json', function (data) {
            deferred.resolve({
                id: folder,
                mails: filterMailByFolder(data.mails, folder)
            });
        });

        return deferred.promise();
    };

    return api;
});