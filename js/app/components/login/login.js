angular.module('e-se')
    .controller('LoginController', ['$scope', '$rootScope', '$state',
        'Usuarios',
        function ($scope, $rootScope, $state, Usuarios) {
            $scope.email = "";
            $scope.password = "";
            $scope.validacaoEmail = "";
            $scope.validacaoPass = "";
            $scope.validacao = "hidden";
            $scope.emailError = "hidden";
            $scope.passwordError = "hidden";
            $rootScope.bodybg = {
                "width": "100%",
                "overflow-y": "scroll"
            };

            $scope.login = function () {

                $scope.emailError = "hidden";
                $scope.passwordError = "hidden";
                $scope.validacaoEmail = "";
                $scope.validacaoPass = "";
                $scope.validacao = "hidden";

                if(!$scope.email) {
                    $scope.emailError = "has-error";
                    $scope.validacaoEmail = "hsa-error";

                    return false;
                }

                if(!$scope.password) {
                    $scope.passwordError = "has-error";
                    $scope.validacaoPass = "has-error";

                    return false;
                }

                var query = {
                    email: $scope.email,
                    password: $scope.password
                };
                Usuarios.query(query).then(function (usuarios) {
                    if(usuarios[0]) {
                        $state.go('survey-index');
                    } else {
                        $scope.validacao = "has-error";
                    }
                });
            };
        }]);