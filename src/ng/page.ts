import angular from 'angular';
var template = require("html-loader?interpolate!val-loader!./page.html");

angular.module("ngSurvey")
    .component("surveyPage",{
        template: template,
        bindings: {
            survey: '<',
            page: '<',
            css: '<'
        },
        controller: function($scope) {
            this.$onInit = function() {
                var me = this;

                $scope.$watch("$ctrl.page", function (newVal, oldVal) {
                    $scope.rows = newVal && newVal.rows || [];
                });

                $scope.hasTitle = function() {
                    return !!me.page.title && me.page.showPageTitles;
                };
            };
        }
    });

