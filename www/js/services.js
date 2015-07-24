//TODO: Change the GET to a POST
// User services - authentication / server stat / registration

angular.module('WalkWithMeApp.services',[]).factory('userService', function($http){
    return {      

      // Sucessfull : {"statusCode":0,"statusDes":"ok"}
      // Error      : {"statusCode":Not zero,"statusDes":"ok"}      
      ServerStats : function (){              
              return $http({
                  method : 'GET',
                  url: '/json/stat.json'
              });
      }, // end function      
      Register : function (){              
              return $http({
                  method : 'GET',
                  url: '/json/register.json'
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


