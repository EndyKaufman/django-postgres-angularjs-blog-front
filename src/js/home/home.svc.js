app.factory('HomeSvc', function($q, NavbarSvc, PropertiesSvc, AppSvc, TagSvc, PostSvc, ProjectSvc) {
    var service = {};

    service.initMeta=function(){
        service.title = AppSvc.setTitle();
    };

    service.setMeta = function() {
        AppSvc.setUrl('');
    };

    service.init = function(reload) {
        service.initMeta();

        $q.all([
            PropertiesSvc.load(),
            TagSvc.load(),
            ProjectSvc.load(),
            PostSvc.load()
        ]).then(function(responseList) {
            ProjectSvc.initMeta();
            PostSvc.initMeta();

            service.setMeta();
        });

    };
    return service;
});