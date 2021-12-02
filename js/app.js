(function(){

    var app = angular.module('universidadApp',[]);
   
    
    app.controller('listadoCtrl', ['$scope', '$http',function($scope,$http) {
      $scope.contact={};
      function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
      


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