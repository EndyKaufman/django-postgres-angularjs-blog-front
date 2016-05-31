app.config(function($routeProvider, $locationProvider) {
    var baseRoute = {
        templateUrl: 'views/home/list.html',
        controller: 'HomeCtrl'
    };
    var routes = {
        '/': baseRoute
    };
    var key = null,
        title = null;
    for (var i = 0; i < AppConfig.lang_list.length; i++) {
        key = AppConfig.lang_list[i].code;
        title = AppConfig.lang_list[i].title;
        routes['/' + key] = angular.extend({}, baseRoute, {
            params: {
                lang: key
            }
        });
    }

    for (var url in routes) {
        $routeProvider
            .when(url, routes[url]);
    }
});