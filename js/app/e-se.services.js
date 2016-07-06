angular.module("e-se")
    .factory('Usuario',function($mongolabResourceHttp){
        return $mongolabResourceHttp('users');
    });