app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/list.html',
        controller: 'HomeCtrl',
        params:{
            navId: 'home'
        }
      });
});