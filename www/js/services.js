//TODO: Change the GET to a POST
// User services - authentication / server stat / registration
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

// Show error service
.factory('errorService', function($ionicLoading){
    return {      
      ShowError : function (msgHtml){              
      	$ionicLoading.show({ template: msgHtml, noBackdrop: true, duration: 2000 });
      } // end function
    }; // end return     
})


