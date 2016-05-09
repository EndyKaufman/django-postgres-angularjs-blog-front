app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
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
      })
      .when('/profile', {
        templateUrl: 'views/account/profile.html',
        controller: 'AccountCtrl',
        params:{
            navId: 'profile'
        }
      });
});