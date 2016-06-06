angular.module('marshmallowAndMammy',['ngRoute'])
.controller('mmController', ['$scope', '$http', MmController])
.config(function($routeProvider){
  $routeProvider.
    when("/", {templateUrl:"/partials/homepage.html"});
});

function MmController ($scope, $http){
  $http.get('trimester-info.json').then(function(trimesterData){
    $scope.weekPanels = trimesterData.data;
    $scope.weekTotal = $scope.weekPanels.length;
  });
}


$(document).ready(function(){

  $('nav').on('click', function(){
    $('.hamburger').toggleClass('menu-is-showing');
    $('.main-nav').slideToggle('fast');
  });


});
