
//Initializing Application
angular.module('WalkingApp',[]);

//Service
angular.module('WalkingApp').service('mainService', function($http){

    return {
      getHistory : function (){
        return $http({
          method : 'GET',
          url: 'http://localhost/WalkWithMe/PHP/WalkingHistory.php/'
        });
      }
    }
  
});

angular.module('WalkingApp').service('newWalkService', function($http){

    return {
      sendData : function (date,month,year,time){
        
        return $http({
          
          method : 'POST',
          url: 'http://localhost/WalkWithMe/ci/index.php/walk/save_walk',
          data: { "DayOfWalk" : date , "MonthOfWalk": month, "YearOfWalk" : year, "TimeOfWalk" : time },
          
        });
      }

      
    }
  
});

angular.module('WalkingApp').service('RegisteringService', function($http){

    return {
      
      RegisterUser : function (){
          alert($scope.mobile_number);
              return $http({
                  method : 'POST',
                  url: 'http://localhost/WalkWithMe/PHP/RegisterUser.php/',
                  data : {"UserId" : $scope.mobile_number, "Username" : $scope.username},
        });
      }
    }      
});

//Controller
angular.module('WalkingApp').controller('simpleController',function($scope, mainService){

  mainService.getHistory().success(function(data){
      
      $scope.walks = data.result;
      
    });
});

//Controller to create a new walk
angular.module('WalkingApp').controller('NewWalkController', function($scope,newWalkService)
{
    $scope.storeWalk = function(){
      var time = document.getElementById('timePicker').value;
      var date = sessionStorage.getItem('Date');
      var month = sessionStorage.getItem('Month');
      var year = sessionStorage.getItem('Year');



      newWalkService.sendData(date,month,year,time).success(function(data)
    {
      alert("Successfully created new walk!");
    });

    };
    
});

//Controller for registering

angular.module('WalkingApp').controller('registerController',function($scope,RegisteringService)
{
    $scope.Register = function()
    {
      mainService.RegisterUser($scope.mobile_number,$scope.username).success(function(data){
      if(data == "Success")
        alert("Successfully Registered!");
    });

    }
    

});
/*
method : 'POST',
          url: 'http://localhost/ci/index.php/walk/save_walk',
          data: { "DayOfWalk" : date , "MonthOfWalk": month, "YearOfWalk" : year, "TimeOfWalk" : time },*/