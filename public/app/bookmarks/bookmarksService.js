(function() {
  'use strict';

  angular.module('booklet')
  .service('bookmarkService', function($q, $http) {

    this.getData = function() {
      var deferred = $q.defer();
          $http({
            method: 'GET',
            url: 'bookmarks.json'
          })
          .then(function(response) {
            deferred.resolve(response.data);
          });
          return deferred.promise;
      };
    });

  this.sendData = function(){
    var dfd = $q.defer(); 
      $http({
        method: 'POST', 
        url: 'bookmarks.json',
        data: 'bookmarks.json'
      })
      .then(function(res) {
        dfd.resolve(res.data); 
      }); 
      return dfd.promise
  }

  this.updateData = function(){
    var dfd = $q.defer(); 
      $http({
        method: 'PUT', 
        url: 'bookmarks.json', 
        data: 'bookmarks.json'
      })
      .then(function(res){
        dfd.resolve(res.data); 
      }); 
      return dfd.promise; 
  }

 })();