//Initializing Application
angular.module('WalkingApp',[]);

//Service
angular.module('WalkingApp').service('mainService', function($http){

    return {
      get : function (){
        return $http({
          method : 'GET',
          url: 'http://localhost/WalkWithMe/PHP/WalkingHistory.php/'
        });
      }
    }
  
});

//Controller
angular.module('WalkingApp').controller('simpleController',function($scope, mainService){

  mainService.get().success(function(data){
      
      $scope.walks = data.result;
      
    });
});

//Controller to create a new walk
angular.module('WalkingApp').controller('NewWalkController', function($scope,newWalkService)
{
    newWalkService.post().success(function(data)
    {
      alert("Successfully created new walk!");
    })
});