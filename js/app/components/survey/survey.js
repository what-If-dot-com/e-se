angular.module('e-se')
    .controller('SurveyIndexController', ['$scope', '$rootScope', '$state',
        '$modal',
        function ($scope, $rootScope, $state, $modal) {
            $rootScope.bodybg = {
                "width": "100%",
                "overflow-y": "scroll"
            };

            $scope.newSurvey = function () {
                $modal
                    .open({
                        templateUrl: 'views/survey/new-survey.html',
                        controller: 'NewSurveyController',
                        resolve: {
                            surveyScope: function () {
                                return $scope
                            }
                        }
                    }).result.then(function () {
                    }, function () {
                    });
            };

        }]);

angular.module('e-se')
    .controller('NewSurveyController', ['$scope', 'surveyScope', function ($scope, surveyScope) {

    }]);