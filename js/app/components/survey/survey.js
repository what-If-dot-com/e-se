angular.module('e-se')
    .controller('SurveyIndexController', ['$scope', '$rootScope', '$state',
        '$modal', 'Pesquisas',
        function ($scope, $rootScope, $state, $modal, Pesquisas) {
            $rootScope.bodybg = {
                "width": "100%",
                "overflow-y": "scroll"
            };

            $scope.pesquisas = [];
            $scope.pesquisasPassadas = [];

            $scope.initIndex = function () {
                var q = {
                    "ativa": true
                };
                Pesquisas.query(q).then(function (pesquisasDB) {
                    if (pesquisasDB[0]) {
                        angular.forEach(pesquisasDB, function (pesquisa, pesquisaIndex) {
                            pesquisa.criacao = new Date(pesquisa.criacao);
                        });
                        $scope.pesquisas = pesquisasDB;
                    }
                });
                var qp = {
                    "ativa": false
                };
                Pesquisas.query(qp).then(function (pesquisasPassadasDB) {
                    if (pesquisasPassadasDB[0]) {
                        angular.forEach(pesquisasPassadasDB, function (pesquisaPassada, pesquisaIndex) {
                            pesquisaPassada.criacao = new Date(pesquisaPassada.criacao);
                        });
                        $scope.pesquisasPassadas = pesquisasPassadasDB;
                    }
                });
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