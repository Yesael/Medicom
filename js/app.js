(function(){

    var app = angular.module('universidadApp',[ ]);
    
    
    
    app.controller('listadoCtrl', ['$scope', function($scope){
     
    
    $scope.especialidades=[
          {
            "id": 0,
            "disponibilidad": 1,
            "servicio": "Alejandro Manzado",
            "precio": "565"
          },
          {
            "id": 1,
            "disponibilidad": 0,
            "servicio": "Jessica Torres",
            "precio": "337"
          },
          {
            "id": 2,
            "disponibilidad": 0,
            "servicio": "Maria Suarez",
            "precio": "830"
          },
          {
            "id": 3,
            "disponibilidad": 1,
            "servicio": "Alberto Gutierrez",
            "precio": "729"
          },
          {
            "id": 4,
            "disponibilidad": 1,
            "servicio": "Bruno Diaz",
            "avatar": "logo.png",
            "precio": "423"
          },
          {
            "id": 5,
            "disponibilidad": 1,
            "servicio": "Alejandro Hernandez",
            "precio": "732"
          },
          {
            "id": 6,
            "disponibilidad": 0,
            "servicio": "Daniela Borja",
            "precio": "225"
          },
          {
            "id": 7,
            "disponibilidad": 0,
            "servicio": "Gina Perez",
            "precio": "522"
          },
          {
            "id": 8,
            "disponibilidad": 1,
            "servicio": "Cesar Caballero",
            "precio": "625"
          },
          {
            "id": 9,
            "disponibilidad": 1,
            "servicio": "Juan Perez",
            "precio": "624"
          }
        ];
    
    
    
    }]);
    
    
    
    
    
    })();