angular.module("e-se")
    .factory('Usuarios',function($mongolabResourceHttp){
        return $mongolabResourceHttp('usuarios');
    });