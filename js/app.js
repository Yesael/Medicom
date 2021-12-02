(function(){

    var app = angular.module('universidadApp',[]);
   
    
    app.controller('listadoCtrl', ['$scope', '$http',function($scope,$http) {
      


      $http.get('https://us-central1-medicom-f4ff2.cloudfunctions.net/app/api/especialidades')
    .then(data => {
      $scope.especialidades = data.data;
      $scope.mensage='hello';
    });
    
    
    $scope.onSubmit=function(){
      console.log("se esta enviando...");
    }
    $scope.onSubmitContact=function(){
      console.log("se esta enviando contacto...");
      console.log($scope.contact);
    }
    console.log($scope.especialidades);
    
    
    
    
    
    }]);
    
    
    
    
    
    })();