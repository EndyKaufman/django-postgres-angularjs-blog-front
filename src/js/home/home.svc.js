app.factory('HomeSvc', function (NavbarSvc, PropertiesSvc) {
    var service={};

    service.title=PropertiesSvc.listOfNames.SITE_TITLE.value;

    service.init=function(reload){
        NavbarSvc.init('home');
    }
    return service;
  });