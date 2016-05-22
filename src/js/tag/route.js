app.config(function($routeProvider, $locationProvider) {
    var routes = {
        '/tag/:tagText': {
            templateUrl: 'views/tag/list.html',
            controller: 'TagCtrl',
            params: {
                navId: 'tag'
            }
        }
    };

    for (var url in routes) {
        $routeProvider
            .when(url, routes[url])
            .when('/:lang_short' + url, routes[url]);
    }
});