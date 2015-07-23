angular.module('WalkWithMeApp.controllers', [])

.controller('StartCtrl', function($scope,$ionicLoading, $state) {

    $ionicLoading.show({
      template: 'Loading...'
    });
    
    // check to see if the server is live // Service
    //var data  = {"statusCode" : 0 , "statusDesc" : "Ok"};

    //Service.login(
    //    success : loginSuccess );

    // if not show error message // exit application

    //if ( data.statusCode != 0)  {
    //    return;
    //}
    // check and see if already logged in // localstorage go to menu
    //localStorage.mobileNo
    //localStorage.nickName

    // if not show login/Register state

    // Test code to hide the loading
    var loginTimer = setInterval( function(){
      clearInterval(loginTimer);
      $ionicLoading.hide();      
      $state.go('login')
    },2000);

    $scope.loginSuccess = function(){

    }
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
