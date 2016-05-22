app.config(function($routeProvider, $locationProvider) {
    var routes = {
        '/contact': {
            templateUrl: 'views/contact/list.html',
            controller: 'ContactCtrl',
            params: {
                navId: 'contact'
            }
        }
    };

    for (var url in routes) {
        $routeProvider
            .when(url, routes[url])
            .when('/:lang_short' + url, routes[url]);
    }
});