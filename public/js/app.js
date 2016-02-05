'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
  'bootstrapLightbox',
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
      when('/collections/:Id', {
        templateUrl: 'partials/collection-detail.html',
        controller: 'CollectionCtrl'
      }). when('/fashion', {
        templateUrl: 'partials/fashion-list.html',
       controller: 'FashionListCtrl'
      }). when('/detail/:Id1/item/:Id2', {
        templateUrl: 'partials/item-detail.html',
       controller: 'ItemDetailCtrl'
      }).      
      otherwise({
        redirectTo: '/articles'
      });
  }]);
