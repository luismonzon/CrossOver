
'use strict'
var app= angular.module('crossOver',['ngMaterial'])


app.config(function($mdThemingProvider){

  $mdThemingProvider.theme('default')
         .primaryPalette('blue',{
       'default':'900',
       'hue-1':'800'
     })
     .accentPalette('teal')
     .warnPalette('red')


})

app.controller('indexController',indexController)
app.controller('homeController',homeController)


function indexController ($scope,$http){

  $scope.user={}

  $scope.iniciarSesion=function(){

    $http.post('/login', $scope.user)
               .success(function (data, status, headers, config) {
                   if(!data.error){
                      
                   }else{

                   }
               })
               .error(function (data, status, header, config) {
                  console.log(data);
               });  }

  console.log("hola");

}

function homeController($scope){}
