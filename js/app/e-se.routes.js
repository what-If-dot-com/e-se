angular.module("e-se").config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/home/home.html",
            controller: 'HomeController',
            data: {
                requiredlogin: false
            }
        })
        .state('login', {
            url: "/login",
            templateUrl: "views/login/login.html",
            controller: 'LoginController',
            data: {
                requiredlogin: false
            }
        })
        .state('survey-index', {
            url: "/survey/index",
            templateUrl: "views/survey/survey-index.html",
            controller: 'SurveyIndexController',
            data: {
                requiredlogin: true
            }
        });
});