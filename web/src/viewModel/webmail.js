'use strict';

define(function (require) {
    var ko = require('knockout'),
        mailAPI = require('src/api/mail');

    return function () {
        var self = this;
        self.chosenFolderData = ko.observable();
        self.chosenMailData = ko.observable();

        self.chooseFolder = function (folder) {
            self.chosenMailData(null);
            mailAPI.findByFolder(folder).done(function (data) {
                self.chosenFolderData(data);
            });
        };

        self.chooseMail = function (mailId) {
            self.chosenFolderData(null);
            mailAPI.get(mailId).done(function (data) {
                self.chosenMailData(data);
            });
        };

        self.goToMail = function (mail) {
            location.hash = '#/' + mail.folder + '/' + mail.id;
        };
    };
});