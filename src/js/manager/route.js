app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/manager', {
        templateUrl: 'views/manager/meta_tag.html',
        controller: 'MetaTagCtrl',
        navId: 'manager',
        subNavId: 'meta_tag'
      })
      .when('/manager/meta_tag', {
        templateUrl: 'views/manager/meta_tag.html',
        controller: 'MetaTagCtrl',
        navId: 'manager',
        subNavId: 'meta_tag'
      });
});