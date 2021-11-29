(function(){

    var app = angular.module('universidadApp',[ ]);
    
    
    
    app.controller('listadoCtrl', ['$scope', function($scope){
     
    
    $scope.personas=[
          {
            "id": 0,
            "sexo": "Masculino",
            "nombre": "Alejandro Manzado",
            "avatar": "logo.png",
            "telefono": "(55) 5453-3497",
            "celular": "(55) 9175-8136"
          },
          {
            "id": 1,
            "sexo": "Femenino",
            "nombre": "Jessica Torres",
            "avatar": "logo.png",
            "telefono": "(55) 5438-2499",
            "celular": "(55) 8595-8337"
          },
          {
            "id": 2,
            "sexo": "Femenino",
            "nombre": "Maria Suarez",
            "avatar": "logo.png",
            "telefono": "(55) 512-2258",
            "celular": "(55) 9375-3830"
          },
          {
            "id": 3,
            "sexo": "Masculino",
            "nombre": "Alberto Gutierrez",
            "avatar": "logo.png",
            "telefono": "(55) 6873-3023",
            "celular": "(55) 9555-1729"
          },
          {
            "id": 4,
            "sexo": "Masculino",
            "nombre": "Bruno Diaz",
            "avatar": "logo.png",
            "telefono": "(55) 5820-2696",
            "celular": "(55) 5924-4423"
          },
          {
            "id": 5,
            "sexo": "Masculino",
            "nombre": "Alejandro Hernandez",
            "avatar": "logo.png",
            "telefono": "(55) 8995-3896",
            "celular": "(55) 8195-2732"
          },
          {
            "id": 6,
            "sexo": "Femenino",
            "nombre": "Daniela Borja",
            "avatar": "logo.png",
            "telefono": "(967) 527-3286",
            "celular": "(801) 8074-5225"
          },
          {
            "id": 7,
            "sexo": "Femenino",
            "nombre": "Gina Perez",
            "avatar": "logo.png",
            "telefono": "(994) 465-3542",
            "celular": "(801) 9044-7522"
          },
          {
            "id": 8,
            "sexo": "Masculino",
            "nombre": "Cesar Caballero",
            "avatar": "logo.png",
            "telefono": "(848) 499-2977",
            "celular": "(801) 8495-0625"
          },
          {
            "id": 9,
            "sexo": "Masculino",
            "nombre": "Juan Perez",
            "avatar": "plogo.png",
            "telefono": "(55) 5580-3235",
            "celular": "(55) 8184-2624"
          }
        ];
    
    
    
    }]);
    
    
    
    
    
    })();