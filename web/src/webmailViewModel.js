'use strict';

define(function (require) {
    var ko = require('knockout'),
        jquery = require('jquery');

    return function () {
        var self = this;
        self.chosenFolderData = ko.observable();
        self.chosenMailData = ko.observable();

        self.chooseInboxFolder = function () {
            self.chosenMailData(null);
            jquery.get("/data/mail.inbox.json", function (data) {
                self.chosenFolderData(data);
            });
        };

        self.chooseArchiveFolder = function () {
            self.chosenMailData(null);
            jquery.get("/data/mail.archive.json", function (data) {
                self.chosenFolderData(data);
            });
        };

        self.chooseSentFolder = function () {
            self.chosenMailData(null);
            jquery.get("/data/mail.sent.json", function (data) {
                self.chosenFolderData(data);
            });
        };

        self.chooseSpamFolder = function () {
            self.chosenMailData(null);
            jquery.get("/data/mail.spam.json", function (data) {
                self.chosenFolderData(data);
            });
        };
    };
});