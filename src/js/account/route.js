app.config(function($routeProvider, $locationProvider) {
    var routes = {
        '/account': {
            templateUrl: 'views/account/profile.html',
            controller: 'ProfileCtrl',
            params: {
                navId: 'account',
                subNavId: 'profile'
            }
        },
        '/account/profile': {
            templateUrl: 'views/account/profile.html',
            controller: 'ProfileCtrl',
            params: {
                navId: 'account',
                subNavId: 'profile'
            }
        },
        '/account/user_app': {
            templateUrl: 'views/account/user_app.html',
            controller: 'UserAppCtrl',
            params: {
                navId: 'account',
                subNavId: 'user_app'
            }
        },
        '/account/reg': {
            templateUrl: 'views/account/reg.html',
            controller: 'AccountCtrl',
            params: {
                navId: 'account',
                subNavId: 'reg'
            }
        },
        '/account/recovery': {
            templateUrl: 'views/account/recovery.html',
            controller: 'AccountCtrl',
            params: {
                navId: 'account',
                subNavId: 'recovery'
            }
        },
        '/account/reset/:code': {
            templateUrl: 'views/account/reset.html',
            controller: 'AccountCtrl',
            params: {
                navId: 'account',
                subNavId: 'reset'
            }
        },
        '/account/reset': {
            templateUrl: 'views/account/reset.html',
            controller: 'AccountCtrl',
            params: {
                navId: 'account',
                subNavId: 'reset'
            },
        },
        '/account/login': {
            templateUrl: 'views/account/login.html',
            controller: 'AccountCtrl',
            params: {
                navId: 'account',
                subNavId: 'login'
            }
        }
    };
    for (var url in routes) {
        $routeProvider
            .when(url, routes[url])
            .when('/:lang' + url, routes[url]);
    }
});