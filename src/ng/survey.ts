import angular from 'angular';
var template = require("html-loader?interpolate!val-loader!./survey.html");

angular.module("ngSurvey", []);

angular.module("ngSurvey")
    .component("survey",{
        template: template,
        bindings: {
            model: '<'
        }
    });

