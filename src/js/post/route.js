app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/post/update/:postName', {
        templateUrl: 'views/post/update.html',
        controller: 'PostCtrl',
        params:{
            navId: 'post',
            update: true
        }
      })
      .when('/post/create', {
        templateUrl: 'views/post/create.html',
        controller: 'PostCtrl',
        params:{
            navId: 'post',
            create: true
        }
      })
      .when('/post/:postName', {
        templateUrl: 'views/post/item.html',
        controller: 'PostCtrl',
        params:{
            navId: 'post',
            item: true
        }
      })
      .when('/post', {
        templateUrl: 'views/post/list.html',
        controller: 'PostCtrl',
        params:{
            navId: 'post',
            list: true
        }
      });
});