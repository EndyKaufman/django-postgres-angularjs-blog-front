app.config(function($routeProvider, $locationProvider) {
  var routes = {
    '/post/update/:postName': {
      templateUrl: 'views/post/update.html',
      controller: 'PostCtrl',
      params: {
        navId: 'post',
        subNavId: 'update'
      }
    },
    '/post/create': {
      templateUrl: 'views/post/create.html',
      controller: 'PostCtrl',
      params: {
        navId: 'post',
        subNavId: 'create'
      }
    },
    '/post/:postName': {
      templateUrl: 'views/post/item.html',
      controller: 'PostCtrl',
      params: {
        navId: 'post',
        subNavId: 'item'
      }
    },
    '/post': {
      templateUrl: 'views/post/list.html',
      controller: 'PostCtrl',
      params: {
        navId: 'post',
        subNavId: 'list'
      }
    }
  };

  for (var url in routes) {
    $routeProvider
      .when(url, routes[url])
      .when('/:lang_short' + url, routes[url]);
  }
});