'use strict';

define(function (require) {
    var ko = require('knockout'),
        sammy = require('sammy'),
        navUtility = require('src/utility/nav'),
        WebmailViewModel = require('src/viewModel/webmail');

    return sammy('#main', function () {
        this.$element().html(require('text!src/viewModel/webmail.html'));

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