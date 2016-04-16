app.factory('ContactSvc', function ($q, $location, AppConst, ContactRes, MessageSvc, $rootScope, $routeParams, NavbarSvc, TagSvc) {
    var service={};

    $rootScope.$on('contact.send',function(event, item){
        MessageSvc.info('contact/send/success', {values:item});
	    $rootScope.$broadcast('hide-errors-check-validity');
    });

    service.item={};

    service.title=AppConst.post.strings.title;

    service.init=function(reload){
        NavbarSvc.init('contact');

        $q.all([
            TagSvc.load()
        ]).then(function(responseList) {

        });
    }
    service.doSend=function(item){
	    $rootScope.$broadcast('show-errors-check-validity');
        ContactRes.actionSend(item).then(
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined && response.data.code=='ok'){
                    service.initEmptyItem();
                    $rootScope.$broadcast('contact.send', service.item);
                }
            },
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined)
                    MessageSvc.error(response.data.code, response.data);
            }
        )
    }
    service.initEmptyItem=function(){
        service.item = {};
    }

    return service;
  });