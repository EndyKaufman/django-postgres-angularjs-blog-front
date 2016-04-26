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
      })
      .when('/manager/public_link', {
        templateUrl: 'views/manager/public_link.html',
        controller: 'PublicLinkCtrl',
        navId: 'manager',
        subNavId: 'public_link'
      })
      .when('/manager/properties', {
        templateUrl: 'views/manager/properties.html',
        controller: 'PropertiesCtrl',
        navId: 'manager',
        subNavId: 'properties'
      })
      .when('/manager/tag', {
        templateUrl: 'views/manager/tag.html',
        controller: 'TagCtrl',
        navId: 'manager',
        subNavId: 'tag'
      });
});