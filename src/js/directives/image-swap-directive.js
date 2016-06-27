angular.module('marshmallowAndMammy').directive('imageSwap', function(){
  return {
    restrict: 'A',
    scope: {
      imageSrc1: '@imageSrc1',
      imageSrc2: '@imageSrc2'
    },
    link: function(scope, elm, attr){
      
      elm.on('click', function(){
        if(elm.attr('src') === scope.imageSrc2){
          elm.attr('src', scope.imageSrc1);
        } else {
          elm.attr('src', scope.imageSrc2);
        }
      });
    }
  };
});
