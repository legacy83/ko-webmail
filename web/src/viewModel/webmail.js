'use strict';

define(function (require) {
    var ko = require('knockout'),
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

    var findMailById = function (mailId) {
        var deferred = jquery.Deferred();
        jquery.get('/data/mail.json', function (data) {
            deferred.resolve(filterMailById(data.mails, mailId));
        });

        return deferred.promise();
    };

    var findMailByFolder = function (folder) {
        var deferred = jquery.Deferred();
        jquery.get('/data/mail.json', function (data) {
            deferred.resolve({
                id: folder,
                mails: filterMailByFolder(data.mails, folder)
            });
        });

        return deferred.promise();
    };

    return function () {
        var self = this;
        self.chosenFolderData = ko.observable();
        self.chosenMailData = ko.observable();

        self.chooseFolder = function (folder) {
            self.chosenMailData(null);
            findMailByFolder(folder).done(function (data) {
                self.chosenFolderData(data);
            });
        };

        self.chooseMail = function (mailId) {
            self.chosenFolderData(null);
            findMailById(mailId).done(function (data) {
                self.chosenMailData(data);
            });
        };

        self.goToMail = function (mail) {
            location.hash = '#/' + mail.folder + '/' + mail.id
        };
    };
});