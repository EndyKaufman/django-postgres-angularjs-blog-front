app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home/list.html',
        controller: 'HomeCtrl'
      });
});