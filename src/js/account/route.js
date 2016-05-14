app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/profile', {
        templateUrl: 'views/account/profile.html',
        controller: 'ProfileCtrl',
        params:{
            navId: 'profile'
        }
      })
      .when('/user_app', {
        templateUrl: 'views/account/user_app.html',
        controller: 'UserAppCtrl',
        params:{
            navId: 'user_app'
        }
      })
      .when('/reg', {
        templateUrl: 'views/account/reg.html',
        controller: 'AccountCtrl',
        params:{
            navId: 'reg'
        }
      })
      .when('/recovery', {
        templateUrl: 'views/account/recovery.html',
        controller: 'AccountCtrl',
        params:{
            navId: 'recovery'
        }
      })
      .when('/reset_password/:code', {
        templateUrl: 'views/account/reset_password.html',
        controller: 'AccountCtrl',
        params:{
            navId: 'reset_password'
        }
      })
      .when('/reset_password', {
        templateUrl: 'views/account/reset_password.html',
        controller: 'AccountCtrl',
        params:{
            navId: 'reset_password'
        }
      })
      .when('/login', {
        templateUrl: 'views/account/login.html',
        controller: 'AccountCtrl',
        params:{
            navId: 'login'
        }
      });
});