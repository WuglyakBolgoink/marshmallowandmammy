angular.module('core').directive('imageSwap', function(){
  return {
    restrict: 'A',
    scope: {
      imageSrc1: '@imageSrc1',
      imageSrc2: '@imageSrc2'
    },
    link: function(scope, elm, attr){

      elm.on('click', function(){
        $(this).siblings('.press-me').toggleClass('press-me-pressed');
        if(elm.attr('src') === scope.imageSrc2){
          elm.attr('src', scope.imageSrc1);
        } else {
          elm.attr('src', scope.imageSrc2);
        }
      });
    }
  };
});
