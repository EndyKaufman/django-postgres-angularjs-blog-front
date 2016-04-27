app.factory('AppSvc', function ($rootScope, $q, PropertiesSvc) {
    var service={};

    service.item={
        title:'',
        description:''
    };

    service.init=function(){
        $q.all([
            PropertiesSvc.load()
        ]).then(function(responseList) {
            service.item.title=PropertiesSvc.listOfNames.SITE_TITLE.value;
            service.item.description=PropertiesSvc.listOfNames.SITE_DESCRIPTION.value;
        });
    }

    return service;
  });