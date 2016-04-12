var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',function($scope, $http){
  var refresh = function(){
    $http.get('/contactlist').success(function(respond){
      console.log('I received the data I requested.');
      $scope.contactlist = respond;
      $scope.contact = '';
    });
  };

refresh();

  $scope.addContact = function(){
    console.log($scope.contact);
    $http.post('/contactlist',$scope.contact).success(function(respond) {
      console.log(respond);
      refresh();
    });
  }

  $scope.removeContact = function(id){
    console.log(id);
    $http.delete('/contactlist/' + id).success(function(respond){
      refresh();
    });
  };
  $scope.editContact = function(id){
    console.log(id);
    $http.get('/contactlist/' + id).success(function(respond){
      $scope.contact = respond;
    });
  };

  $scope.updateContact = function(){
    console.log($scope.contact._id);
    $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(respond){
      refresh();
    });
  };

  $scope.clear = function(){
    $scope.contact = '';
  };
});
