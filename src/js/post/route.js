app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/post/update/:postName', {
        templateUrl: 'views/post/update.html',
        controller: 'PostCtrl',
        update: true
      })
      .when('/post/create', {
        templateUrl: 'views/post/create.html',
        controller: 'PostCtrl',
        create: true
      })
      .when('/post/:postName', {
        templateUrl: 'views/post/item.html',
        controller: 'PostCtrl',
        item: true
      })
      .when('/post', {
        templateUrl: 'views/post/list.html',
        controller: 'PostCtrl',
        list: true
      });
});