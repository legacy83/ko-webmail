'use strict';

define(function (require) {
    var ko = require('knockout'),
        sammy = require('sammy'),
        jquery = require('jquery');

    var WebmailViewModel = function () {
        var self = this;
        self.chosenFolderData = ko.observable();
        self.chosenMailData = ko.observable();

        self.chooseFolder = function (folder) {
            self.chosenMailData(null);
            jquery.get("/data/mail." + folder + ".json", {folder: folder}, self.chosenFolderData);
        };
    };

    return sammy('#main', function () {

        var webmailViewModel = new WebmailViewModel();
        ko.applyBindings(webmailViewModel);

        this.get('#/:folder', function () {
            jquery(".nav a").parent().removeClass('active');
            jquery(".nav a[href='#/']").parent().addClass('active');
            webmailViewModel.chooseFolder(this.params.folder);
        });

    });
});