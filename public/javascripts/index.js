
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

function indexController ($scope){

  $scope.user={}

  $scope.saludar=function(){
    console.log($scope.user.name)
  }

  console.log("hola");

}
