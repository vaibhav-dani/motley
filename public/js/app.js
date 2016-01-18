'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
  'phonecatDirectives'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/articles', {
        templateUrl: 'partials/article-list.html',
       controller: 'ArticleListCtrl'
      }).
      when('/articles/:articleId', {
        templateUrl: 'partials/article-detail.html',
        controller: 'ArticleDetailCtrl'
      }).
      otherwise({
        redirectTo: '/articles'
      });
  }]);
