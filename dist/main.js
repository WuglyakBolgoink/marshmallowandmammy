function MmController(e,o,t){o.get("trimester-info.json").then(function(o){e.weekPanels=o.data,e.weekTotal=e.weekPanels.length},function(e){console.log(e.data)}),e.go=function(e){"inactive"!==e&&t.path(e)},e.toggleNav=function(){$(".main-nav").slideToggle("fast"),$(".hamburger").toggleClass("menu-is-showing")}}angular.module("marshmallowAndMammy",["ngRoute"]).controller("mmController",["$scope","$http","$location",MmController]).config(["$routeProvider","$locationProvider",function(e,o){e.when("/",{templateUrl:"/partials/homepage.html"}).when("/weeks5-8.html",{templateUrl:"/partials/week5-8.html"}),o.html5Mode(!0)}]);
//# sourceMappingURL=main.js.map
