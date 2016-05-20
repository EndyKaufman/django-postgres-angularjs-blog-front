app.factory('ContactSvc', function($q, $location, AppConst, ContactRes, MessageSvc, $rootScope, NavbarSvc, AppSvc) {
    var service = {};

    $rootScope.$on('contact.send', function(event, item) {
        MessageSvc.info('contact/send/success', {
            values: item
        });
        $rootScope.$broadcast('hide-errors-check-validity');
    });

    service.item = {};

    service.title = AppConst.contact.strings.title;
    service.description = AppConst.contact.strings.description;

    service.init = function(reload) {
        AppSvc.setTitle([service.title]);
        AppSvc.setDescription(service.description);
        AppSvc.setUrl('contact');
    };
    service.doSend = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        ContactRes.actionSend(item).then(
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined && response.data.code == 'ok') {
                    service.initEmptyItem();
                    $rootScope.$broadcast('contact.send', service.item);
                }
            },
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined)
                    MessageSvc.error(response.data.code, response.data);
            }
        );
    };
    service.initEmptyItem = function() {
        service.item = {};
    };

    return service;
});