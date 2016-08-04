angular.module('core')
.directive('lazyLoad', lazyLoadDirective);

function lazyLoadDirective() {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      $(element).lazyload({
        effect : "fadeIn"
      });
    }
  };
}
