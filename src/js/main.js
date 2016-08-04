angular.module('marshmallowAndMammy',['ngRoute', 'core'])
.controller('mmController', ['$scope', '$http', '$location', MmController])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider.
    when("/", {templateUrl:"/partials/homepage.html"}).
    when("/weeks5-8", {templateUrl:"/partials/week5-8.html"}).
    when("/weeks9-13", {templateUrl:"/partials/week9-13.html"});
    $locationProvider.html5Mode(true);

}]);

function MmController ($scope, $http, $location){
  console.log('loading');
  $http.get('trimester-info.json').then(function(trimesterData){
    console.log('done');
    $scope.weekPanels = trimesterData.data;
    $scope.weekTotal = $scope.weekPanels.length;
  }, function(e){console.log(e.data);});

  $scope.go = function(path) {
    if(path !== 'inactive'){
      $location.path(path);
    }
  };

  $scope.toggleNav = function(){
    $('.main-nav').slideToggle('fast');
    $('.hamburger').toggleClass('menu-is-showing');
  };

}//MmControler Close

$(document).ready(function(){

  $('.press-me').on('click', function(){
    $(this).toggleClass('press-me-pressed');
  });

});
