angular.module('e-se')
    .controller('SurveyIndexController', ['$scope', '$rootScope', '$state',

        function ($scope, $rootScope, $state) {
            $rootScope.bodybg = {
                "width": "100%",
                "overflow-y": "scroll"
            };
        }]);