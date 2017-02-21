import angular from 'angular';
var template = require("html-loader?interpolate!val-loader!./radiogroup.html");

angular.module("ngSurvey")
    .component("surveyRadiogroup",{
        template: template,
        bindings: {
            question: '<',
            isEditMode: '<',
            css: '<'
        },
        controller: function($scope) {
        }
    });
