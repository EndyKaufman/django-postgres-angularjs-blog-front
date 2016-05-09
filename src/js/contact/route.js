app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'views/contact/list.html',
        controller: 'ContactCtrl',
        params:{
            navId: 'contact'
        }
      });
});