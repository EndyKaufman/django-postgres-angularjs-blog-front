app.factory('HomeSvc', function ($q, NavbarSvc, PropertiesSvc, AppSvc, TagSvc, PostSvc, ProjectSvc, PropertiesSvc) {
    var service={};

    service.init=function(reload){
        NavbarSvc.init('home');

        $q.all([
            PropertiesSvc.load(),
            TagSvc.load(),
            ProjectSvc.load(),
            PostSvc.load()
        ]).then(function(responseList) {
            service.title=PropertiesSvc.listOfNames.SITE_TITLE.value;
            AppSvc.item.title=PropertiesSvc.listOfNames.SITE_TITLE.value;
            AppSvc.item.description=PropertiesSvc.listOfNames.SITE_DESCRIPTION.value;
        });

    }
    return service;
  });