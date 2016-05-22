app.config(['$resourceProvider', '$httpProvider', function($resourceProvider, $httpProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  }])
  .config(function($routeProvider, $locationProvider, $showdownProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    // options to be passed to Showdown
    // see: https://github.com/coreyti/showdown#extensions
    $showdownProvider.loadExtension('github');
  });