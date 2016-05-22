app.config(function($routeProvider, $locationProvider) {
    var routes = {
        '/': {
            templateUrl: 'views/home/list.html',
            controller: 'HomeCtrl'
        },
        '/ru': {
            templateUrl: 'views/home/list.html',
            controller: 'HomeCtrl',
            params: {
                lang_short: 'ru'
            }
        },
        '/en': {
            templateUrl: 'views/home/list.html',
            controller: 'HomeCtrl',
            params: {
                lang_short: 'en'
            }
        }
    };

    for (var url in routes) {
        $routeProvider
            .when(url, routes[url]);
    }
});