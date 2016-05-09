app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/project/update/:projectName', {
        templateUrl: 'views/project/update.html',
        controller: 'ProjectCtrl',
        params:{
            navId: 'project',
            update: true
        }
      })
      .when('/project/create', {
        templateUrl: 'views/project/create.html',
        controller: 'ProjectCtrl',
        params:{
            navId: 'project',
            create: true
        }
      })
      .when('/project/:projectName', {
        templateUrl: 'views/project/item.html',
        controller: 'ProjectCtrl',
        params:{
            navId: 'project',
            item: true
        }
      })
      .when('/project', {
        templateUrl: 'views/project/list.html',
        controller: 'ProjectCtrl',
        params:{
            navId: 'project',
            list: true
        }
      });
});