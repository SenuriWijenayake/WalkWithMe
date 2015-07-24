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
                    },2000);
            }else{
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


.controller('RegisterCtrl', function($scope,$ionicLoading, $state) {

    // show login ctrl
    $scope.sendCode = function(){
        $state.go('register-step2');
    }

    $scope.validate = function(){
        $state.go('menu');
    }
})

.controller('MenuCtrl', function($scope,$ionicLoading, $state) {

    // show login ctrl
    $scope.history = function(){
        alert("history");
    }

  $scope.newWalk = function(){
        alert("New walk");
    }
})

.controller('WalkCtrl', function($scope,$ionicLoading, $state) {

    // show login ctrl
    $scope.create = function(){
        alert("Create");
    }

  $scope.newWalk = function(){
        alert("New walk");
    }
})
.controller('HistoryCtrl', function($scope,$ionicLoading, $state) {

    // show login ctrl
    $scope.history = function(){
        alert("history");
    }
})
;
