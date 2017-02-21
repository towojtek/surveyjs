import angular from 'angular';
var template = require("html-loader?interpolate!val-loader!./comment.html");

angular.module("ngSurvey")
    .component("surveyComment",{
        template: template,
        bindings: {
            question: '<',
            iseditmode: '<',
            css: '<'
        }
    });
