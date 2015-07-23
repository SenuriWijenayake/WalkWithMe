angular.module('WalkWithMeApp.services',[]).factory('userService', function($http){
    return {      
      ServerStats : function (){              
              return $http({
                  method : 'GET',
                  url: 'http://localhost:8080/json/stat.json'
              });
      } // end function
    }; // end return     
})


