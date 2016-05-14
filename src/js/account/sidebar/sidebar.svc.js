app.factory('AccountSidebarSvc', function ($q, TagSvc, PostSvc, ProjectSvc) {
    var service={};

    service.init=function(reload){
        $q.all([
            TagSvc.load(),
            ProjectSvc.load(),
            PostSvc.load()
        ]).then(function(responseList) {
        });

    }
    return service;
  });