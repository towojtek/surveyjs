import angular from 'angular';
var template = require("html-loader?interpolate!val-loader!./page.html");

angular.module("ngSurvey")
    .component("surveyPage",{
        template: template,
        bindings: {
            survey: '<',
            page: '<'
        },
        controller: function($scope) {
            this.$onInit = function() {
                $scope.rows = this.page.rows;
            };
        }
    });

