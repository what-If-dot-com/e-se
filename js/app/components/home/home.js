angular.module('e-se')
    .controller('HomeController', ['$scope', '$rootScope', '$state',

        function ($scope, $rootScope, $state) {
            $rootScope.bodybg = {
                "background": "url('img/bg.jpg') no-repeat center center fixed",
                "background-size": "cover",
                "width": "100%",
                "overflow-y": "scroll"
            };
        }]);