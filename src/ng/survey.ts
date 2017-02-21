import angular from "angular";
var template = require("html-loader?interpolate!val-loader!./survey.html");

angular.module("ngSurvey", []);

angular.module("ngSurvey")
    .component("survey",{
        template: template,
        bindings: {
            model: '<'
        },
        controller: function($scope) {
            this.$onInit = function() {
                var me = this;

                $scope.getNavBtnClasses = function(btnType) {
                    var btnClass = me.model.css.navigation[btnType];
                    return me.model.navigationButton + ' ' + btnClass;
                };

                $scope.completeLastPage = function() {
                    me.model.completeLastPage();
                };

                $scope.prevPage = function() {
                    me.model.prevPage();
                };

                $scope.nextPage = function() {
                    me.model.nextPage();
                };
            };
        }
    });

angular.module("ngSurvey").
    directive('surveyComponent', $compile => {
    return {
        restrict: "E",
        replace: true,
        link: (scope, element, attributes) => {
            var originalComponent = element;
            scope.$watch(attributes["type"], type => {
                type = !!type ? type : "error"; // TODO: implement survey-error component
                var component = $compile('<survey-' + type + ' question="question" isEditMode="$ctrl.survey.isEditMode"></survey-' + type + '>')(scope);
                originalComponent.replaceWith(component);
            });
        }
    };
});