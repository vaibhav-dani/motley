'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('api/phones').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
   // $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
    
      $http.get('api/phone/' + $routeParams.phoneId).success(function(data) {
      $scope.phone = data[0];   
      $scope.mainImageUrl = data[0].images[0];   
    });

      $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
    
  }]);


phonecatControllers.controller('ArticleListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('api/articles').success(function(data) {
      $scope.articles = data;
    });

    $scope.orderProp = 'age';
  }]);


phonecatControllers.controller('FashionListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('api/all-collections').success(function(data) {
      $scope.fashion = data;
    });

    $scope.orderProp = 'ORDER';
  }]);

phonecatControllers.controller('CollectionCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    
      $http.get('api/collections/' + $routeParams.Id).success(function(data) {
      $scope.collections = data;         
    });
      
  }]);


phonecatControllers.controller('ItemDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    
      $http.get('api/collections/' + $routeParams.Id1).success(function(data) {
      $scope.collections = data;         
      $scope.item=$routeParams.Id2
    });
      
  }]);



