
angular.module('fashionphile').controller('LoginCtrl', function($scope, bookmarksService){

  $scope.test = "bookmarksService test controller"; 

  $scope.sendData = function(data){
    bookmarksService.sendData(data); 
  }

}); 