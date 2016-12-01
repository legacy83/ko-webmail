'use strict';

define(function (require) {
    var ko = require('knockout'),
        sammy = require('sammy'),
        jquery = require('jquery'),
        WebmailViewModel = require('src/webmailViewModel');

    return sammy('#main', function () {

        var webmailViewModel = new WebmailViewModel();
        ko.applyBindings(webmailViewModel);

        this.get('#/Inbox', function () {
            jquery(".nav a").parent().removeClass('active');
            jquery(".nav a[href='#/Inbox']").parent().addClass('active');
            webmailViewModel.chooseInboxFolder();
        });

        this.get('#/Archive', function () {
            jquery(".nav a").parent().removeClass('active');
            jquery(".nav a[href='#/Archive']").parent().addClass('active');
            webmailViewModel.chooseArchiveFolder();
        });

        this.get('#/Sent', function () {
            jquery(".nav a").parent().removeClass('active');
            jquery(".nav a[href='#/Sent']").parent().addClass('active');
            webmailViewModel.chooseSentFolder();
        });

        this.get('#/Spam', function () {
            jquery(".nav a").parent().removeClass('active');
            jquery(".nav a[href='#/Spam']").parent().addClass('active');
            webmailViewModel.chooseSpamFolder();
        });

    });
});