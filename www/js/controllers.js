angular.module('WalkWithMeApp.controllers', [])

.controller('StartCtrl', function($window, $rootScope, $scope,$ionicLoading, $state, userService, errorService) {

    $ionicLoading.show({ template: 'Loading...' });

    userService.ServerStats()
        .success(function(data, status) {

            // TODO : Remove Hard coding in live
            //$window.localStorage['mobileNo'] = '94777331370';
            //$window.localStorage['nickName'] = 'Chandi Wicky';

            if ( data.statusCode > 0 ){
                errorService.ShowError('Server appeared to be offline or in maintainance, Please try again later');
                return;
            }

            // check and see if already logged in // localstorage go to menu
            //localStorage.mobileNo
            //localStorage.nickName
            // if not show login/Register state
            if ( !$window.localStorage['mobileNo'] ){
                    // Delay a little before loading the 
                    var loginTimer = setInterval( function(){
                    clearInterval(loginTimer);                    
                    $state.go('login');
                    },1000);
            }else{
                // Save to the rootScope can be used anywhere in the application
                $rootScope.mobileNo = $window.localStorage['mobileNo'];
                $rootScope.nickName = $window.localStorage['nickName'];    
                $state.go('menu');
            }
            
            $ionicLoading.hide();            
        }).error( function(data, status) {
            // htpp error
            //show error message and exit the application
            errorService.ShowError('Server appeared to be offline or in maintainance(HTTP), Please try again later');
            return;
        });

})

.controller('LoginCtrl', function($scope,$ionicLoading, $state) {

    // show login ctrl
    $scope.register = function(){        
        $state.go('register-step1');
    }
})


.controller('RegisterCtrl', function($scope,$ionicLoading, $state, $stateParams, userService, errorService) {

    var registrationData = [];
    registrationData.mobileNo = "";
    registrationData.nickName = "";
    
    $scope.registrationData = registrationData;
    // show login ctrl
    $scope.sendCode = function(){
        // Register in the database        
        // Get the code and 
        var mobileNo = $scope.registrationData.mobileNo;
        var nickName = $scope.registrationData.nickName;
        
        console.log("Registration data: mobile no: "+$scope.registrationData.mobileNo);
        console.log("Registration data: nickname: "+$scope.registrationData.nickName);
        
        if ( !mobileNo || mobileNo == "" ){
            errorService.ShowError('Mobile no cannot be empty');
            return;
        }

        if ( !nickName || nickName == "" ){
            errorService.ShowError('Nick name no cannot be empty');
            return;
        }

        $ionicLoading.show({ template: 'Loading...' });

        userService.Register()
        .success(function(data, status) {

            if ( data.statusCode > 0 ){
                errorService.ShowError('Sorry cannot register you at this time,Please try again later');
                return;
            }

            //alert(data.content.code);
            // Save info for the second step
            // TODO: Params not working yet
            $state.go('register-step2', { code: data.content.code });    
            
            $ionicLoading.hide();            
        }).error( function(data, status) {
            // htpp error
            //show error message and exit the application
            errorService.ShowError('Server appeared to be offline or in maintainance(HTTP), Please try again later');
            return;
        });
        
    }

    $scope.validate = function(){
        alert($stateParams);
        //compair with the entered code
        $state.go('menu');
    }
})

.controller('MenuCtrl', function($scope,$ionicLoading, $state) {

   var data = {
  

    "nextWalk": {

            "Date": "Sat 25, July 2015",

        "Time": "5.00 pm",
    
        "Participants": ["Senuri, ","Mandy, ","Kasuni"]

       
  },
 

    "invitations": [
    
        {"Inviter" : "Jerry" , "DateInvite" : "Wed 22, July 2015" , "Time" : "5.00 am", "Pariticipants" : ["Senuri","Mandy","Kasuni"]},
        {"Inviter" : "Tom" , "DateInvite" : "Monday 20, July 2015" , "Time" : "5.30 am", "Pariticipants" : ["Senuri","Tim","Tic"]}
  
        ],
 

    "walkHistory": [
    
        {"Month" : "July" , "Count" : 4},

            {"Month" : "June" , "Count" : 3},
   
        {"Month" : "May" , "Count" : 2}
 
        ]


};

    // My Next Walk
    
    $scope.date = data.nextWalk.Date;
    $scope.walkTime = data.nextWalk.Time;
$scope.walkParticipants = data.nextWalk.Participants;



// Walking Invitations

$scope.inviteWalk = data.invitations;

// History

$scope.historyWalk = data.walkHistory;
//$scope.historyCount = data.walkHistory.Count;





  
}
)


.controller('WalkCtrl', function($scope,$ionicLoading, $state) {

    // show login ctrl
    $scope.create = function(){
        alert("Create");
    }

    $scope.newWalk = function(){
        alert("New walk");
    }

    $scope.onSwipeRight = function(){
         $state.go('menu');
    }
})
.controller('HistoryCtrl', function($scope,$ionicLoading, $state) {

    // show login ctrl
    $scope.history = function(){
        alert("history");
    }

    $scope.onSwipeRight = function(){
        $state.go('menu');
    }
})

.controller('MotivationCtrl', function($scope,$ionicLoading, $state) {

    // show login ctrl
    $scope.onSwipeLeft = function(){
        
        $state.go('menu');
    }
})
;
