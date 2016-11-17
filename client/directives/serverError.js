angular.module('Instagram')
  .directive('serverError', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
          element.on('keydown', function() {
            console.log(ctrl);
            ctrl.$setValidity('server', true);
          });
        }
    }
  });