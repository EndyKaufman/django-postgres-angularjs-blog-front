app.config(['$resourceProvider','$httpProvider', function($resourceProvider,$httpProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/home'
      });

    $locationProvider.html5Mode({
      requireBase: false
    });
});