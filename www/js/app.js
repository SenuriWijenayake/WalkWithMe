// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('WalkWithMeApp', ['ionic', 'WalkWithMeApp.controllers', 'WalkWithMeApp.services', 'ui.router', 'angularMoment'])

.run(function($ionicPlatform, $state) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
    // Start application here
    $state.go('start');
})

.constant('angularMomentConfig', {
    
    timezone: 'Asia/Colombo' // optional
})

.config(function($stateProvider, $urlRouterProvider) {

    // State transition setup
    $stateProvider        
        // Starting state // Application startup
        .state('start', {
            url: "/start",
            templateUrl: "templates/start.html",
            controller: 'StartCtrl'
        })

        .state('login', {
            url: "/login",
            templateUrl: "templates/login.html",
            controller: 'LoginCtrl'
        })

        .state('register-step1', {
            url: "/register-step1",
            templateUrl: "templates/registerStep1.html",
            controller: 'RegisterCtrl'
        })

        .state('register-step2', {
            url: "/register-step2",
            templateUrl: "templates/registerStep2.html",
            controller: 'RegisterCtrl'
        })

        .state('menu', {
            url: "/menu",
            templateUrl: "templates/menu.html",
            controller: 'MenuCtrl'
        })
        
        .state('newWalk', {
            url: "/newWalk",
            templateUrl: "templates/newWalk.html",
            controller: 'WalkCtrl'
        })

        .state('walkNow', {
            url: "/walkNow",
            templateUrl: "templates/walkNow.html",
            controller: 'WalkCtrl'
        })

        .state('join', {
            url: "/join",
            templateUrl: "templates/join.html",
            controller: 'WalkCtrl'
        })

        .state('history', {
            url: "/history",
            templateUrl: "templates/history.html",
            controller: 'HistoryCtrl'
        })

         .state('motivation', {
            url: "/motivation",
            templateUrl: "templates/motivation.html",
            controller: 'MotivationCtrl'
        })

        .state('invite', {
            url: "/invite",
            templateUrl: "templates/invite.html",
            controller: 'InviteCtrl'
        })
});