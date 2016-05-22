app.config(['$resourceProvider','$httpProvider', function($resourceProvider,$httpProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}])
.config(function ($routeProvider, $locationProvider, markdownConverterProvider) {
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
  markdownConverterProvider.config({
    extensions: ['twitter', 'github', 'prettify', 'table']
  });
});