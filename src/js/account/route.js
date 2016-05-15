app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/account', {
        templateUrl: 'views/account/profile.html',
        controller: 'ProfileCtrl',
        params:{
            navId: 'account',
            subNavId: 'profile'
        }
      })
      .when('/account/profile', {
        templateUrl: 'views/account/profile.html',
        controller: 'ProfileCtrl',
        params:{
            navId: 'account',
            subNavId: 'profile'
        }
      })
      .when('/account/user_app', {
        templateUrl: 'views/account/user_app.html',
        controller: 'UserAppCtrl',
        params:{
            navId: 'account',
            subNavId: 'user_app'
        }
      })
      .when('/account/reg', {
        templateUrl: 'views/account/reg.html',
        controller: 'AccountCtrl',
        params:{
            navId: 'account',
            subNavId: 'reg'
        }
      })
      .when('/account/recovery', {
        templateUrl: 'views/account/recovery.html',
        controller: 'AccountCtrl',
        params:{
            navId: 'account',
            subNavId: 'recovery'
        }
      })
      .when('/account/reset/:code', {
        templateUrl: 'views/account/reset.html',
        controller: 'AccountCtrl',
        params:{
            navId: 'account',
            subNavId: 'reset'
        }
      })
      .when('/account/reset', {
        templateUrl: 'views/account/reset.html',
        controller: 'AccountCtrl',
        params:{
            navId: 'account',
            subNavId: 'reset'
        }
      })
      .when('/account/login', {
        templateUrl: 'views/account/login.html',
        controller: 'AccountCtrl',
        params:{
            navId: 'account',
            subNavId: 'login'
        }
      });
});