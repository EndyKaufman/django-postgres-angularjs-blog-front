app.config(function($routeProvider, $locationProvider) {
  var routes = {
    '/project/update/:projectName': {
      templateUrl: 'views/project/update.html',
      controller: 'ProjectCtrl',
      params: {
        navId: 'project',
        subNavId: 'update'
      }
    },
    '/project/create': {
      templateUrl: 'views/project/create.html',
      controller: 'ProjectCtrl',
      params: {
        navId: 'project',
        subNavId: 'create'
      }
    },
    '/project/:projectName': {
      templateUrl: 'views/project/item.html',
      controller: 'ProjectCtrl',
      params: {
        navId: 'project',
        subNavId: 'item'
      }
    },
    '/project': {
      templateUrl: 'views/project/list.html',
      controller: 'ProjectCtrl',
      params: {
        navId: 'project',
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