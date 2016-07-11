angular.module("e-se")
    .factory('Usuarios',function($mongolabResourceHttp){
        return $mongolabResourceHttp('usuarios');
    })
    .factory('Pesquisas',function($mongolabResourceHttp){
        return $mongolabResourceHttp('pesquisas');
    });