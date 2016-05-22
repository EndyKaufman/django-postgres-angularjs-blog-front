app.factory('HomeSvc', function($rootScope, $q, NavbarSvc, PropertiesSvc, AppSvc, TagSvc, PostSvc, ProjectSvc) {
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
        ]).then(function(dataList) {
            $rootScope.$broadcast('project.init.meta');
            $rootScope.$broadcast('post.init.meta');

            service.setMeta();
        });

    };
    return service;
});