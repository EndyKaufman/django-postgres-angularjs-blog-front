app.config(function($routeProvider, $locationProvider) {
    var routes = {
        '/search/:searchText': {
            templateUrl: 'views/search/list.html',
            controller: 'SearchCtrl',
            params: {
                navId: 'search'
            }
        }
    };

    for (var url in routes) {
        $routeProvider
            .when(url, routes[url])
            .when('/:lang_short' + url, routes[url]);
    }
});