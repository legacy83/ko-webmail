'use strict';

define(function (require) {
    var ko = require('knockout'),
        sammy = require('sammy'),
        jquery = require('jquery'),
        navUtility = require('src/utility/nav'),
        WebmailViewModel = require('src/viewModel/webmail');

    return sammy('#main', function () {
        this.$element().append(require('text!templates/webmail.html'));
        this.$element().append(require('text!templates/webmailItem.html'));

        var webmailViewModel = new WebmailViewModel();
        ko.applyBindings(webmailViewModel);

        this.get('#/:folder', function () {
            navUtility.activate(this.params.folder);
            webmailViewModel.chooseFolder(this.params.folder);
        });

        this.get('#/:folder/:mailId', function () {
            navUtility.activate(this.params.folder);
            webmailViewModel.chooseMail(this.params.mailId);
        });
    });
});