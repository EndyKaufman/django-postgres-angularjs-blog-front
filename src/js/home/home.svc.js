app.factory('HomeSvc', function($q, NavbarSvc, PropertiesSvc, AppSvc, TagSvc, PostSvc, ProjectSvc) {
    var service = {};

    service.init = function(reload) {
        $q.all([
            PropertiesSvc.load(),
            TagSvc.load(),
            ProjectSvc.load(),
            PostSvc.load()
        ]).then(function(responseList) {
            service.title = AppSvc.setTitle();
            AppSvc.setUrl();
        });

    };
    return service;
});