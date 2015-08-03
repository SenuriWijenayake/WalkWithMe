angular.module('WalkWithMeApp.controllers', ['angularMoment'])

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

.controller('MenuCtrl', function($window, $rootScope, $scope,$ionicLoading, $state, userService, errorService) {

    //$ionicLoading.show({ template: 'Loading...' });
    // TODO : Remove Hard coding in live
    var mobileNumber = 713456781;
    var username = "Mandy Moore";
    
    userService.MenuService(mobileNumber, username)
        .success(function(data) {

            if ( data.statusCode > 0 ){
                errorService.ShowError('Server appeared to be offline or in maintainance, Please try again later');
                $state.go('start');
                return;
            }
            
            else{
                
                // Setting my next walk data
                $scope.myNextWalk = data.nextWalk;
                // Setting the walking invitiations
                $scope.inviteWalk = data.invitations;
                // Setting the walking history
                $scope.historyWalk = data.walkHistory;
                $ionicLoading.hide(); 

                $scope.range = function(n){
                        return new Array(n);
                };

                $scope.isFirstTime = function() {
                return data.statusCode;
                };

            }
                     
        })
        .error(function(data) {
            // htpp error
            //show error message and exit the application
            errorService.ShowError('Server appeared to be offline or in maintainance(HTTP), Please try again later');
            return;
        });

})


.controller('WalkCtrl', function($scope,$ionicLoading, $state, $window, $rootScope) {

    //Setting date
    $scope.today = moment().format('d');
    $scope.date = moment().format("DD"); 
    $scope.dateCopy = $scope.date;
    $scope.month = moment().format("MMM"); 
    $scope.year = moment().format("YY"); 
    $scope.calTitle = moment().format("MMM YYYY");

    $scope.setThisWeek = function(){
        
        $scope.selectedDate = null;
        $scope.dateCopy = $scope.date;
        $scope.sunday = moment().weekday(0).format("DD");
        $scope.mon = moment().weekday(1).format("DD");
        $scope.tue = moment().weekday(2).format("DD");
        $scope.wed = moment().weekday(3).format("DD");
        $scope.thur = moment().weekday(4).format("DD");
        $scope.fri = moment().weekday(5).format("DD");
        $scope.sat = moment().weekday(6).format("DD");

    }

    $scope.setNextWeek = function(){
        
        $scope.selectedDate = null;
        $scope.dateCopy = null;
        $scope.sunday = moment().weekday(7).format("DD");
        $scope.mon = moment().weekday(8).format("DD");
        $scope.tue = moment().weekday(9).format("DD");
        $scope.wed = moment().weekday(10).format("DD");
        $scope.thur = moment().weekday(11).format("DD");
        $scope.fri = moment().weekday(12).format("DD");
        $scope.sat = moment().weekday(13).format("DD");
    }
    
    $scope.setThisWeek();
    
    //Calender click event
    $scope.selectedDate = null;
    $scope.selectDate = function(_index){
        $scope.selectedDate = _index;
        $scope.setClass(_index);

    }

    //function to set the class of the days
    $scope.setClass = function(_date){
       if($scope.selectedDate == _date)
            return "selected";
        if($scope.dateCopy == _date)
            return "today";
    }

    //Setting the time
    $scope.hour = 05;
    $scope.minutes = 30;
    $scope.am = "AM";
    $scope.increaseHour = function()
    {      
          $scope.increaseHour =  function () {
            if ($scope.hour == "12") {
                $scope.hour = 1;
            }
            else {
                $scope.hour = $scope.hour + 1;
            }
        }
    }

    $scope.increaseMinutes = function()
    {
        if($scope.minutes == "45")
        {
            $scope.minutes = "00";
        }
        else
        {
            $scope.minutes = parseInt($scope.minutes) + 15;
        }
        
    }

    $scope.change = function()
    {
        if($scope.am == "AM")
            $scope.am = "PM";
        else
            $scope.am = "AM";
        
    }

    $scope.onCreate = function(){
        $rootScope.walkDate = $scope.selectedDate + " " + $scope.month + " " + $scope.year;
        $rootScope.walkTime = $scope.hour + "." + $scope.minutes + " " + $scope.am;
        $state.go('invite');
    }

    $scope.onSwipeRight = function(){
         $state.go('menu');
    }

       
    
})

.controller('InviteCtrl', function($scope,$ionicLoading, $state,$rootScope) {

    // show login ctrl
    $scope.history = function(){
        alert("history");
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
