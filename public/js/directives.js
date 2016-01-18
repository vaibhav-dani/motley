'use strict';

/* Directives */

var directives = angular.module('phonecatDirectives', []);

directives.directive("footer", function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'partials/footer.html'    
  };
});
