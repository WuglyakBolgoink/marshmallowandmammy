angular.module('marshmallowAndMammy',['ngRoute'])
.controller('mmController', ['$scope', '$http', MmController])
.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when("/", {templateUrl:"/partials/homepage.html"}).
    when("/weeks5-8.html", {templateUrl:"/partials/week5-8.html"});
}]);

function MmController ($scope, $http){
  $http.get('trimester-info.json').then(function(trimesterData){
    $scope.weekPanels = trimesterData.data;
    $scope.weekTotal = $scope.weekPanels.length;
  }, function(e){console.log(e.data);});
}


$(document).ready(function(){

  $('nav').on('click', function(){
    $('.hamburger').toggleClass('menu-is-showing');
    $('.main-nav').slideToggle('fast');
  });


});
