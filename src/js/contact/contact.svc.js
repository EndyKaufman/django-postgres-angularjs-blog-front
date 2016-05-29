app.factory('ContactSvc', function($q, $location, AppConst, ContactRes, MessageSvc, $rootScope, NavbarSvc, AppSvc, gettextCatalog) {
    var service = {};

    service.item = {};

    service.setMeta = function() {
        AppSvc.setTitle([service.title]);
        AppSvc.setDescription(service.description);
        AppSvc.setUrl('contact');
    };

    service.init = function(reload) {
        service.title = gettextCatalog.getString(AppConst.contact.strings.title);
        service.description = gettextCatalog.getString(AppConst.contact.strings.description);

        service.setMeta();
    };

    service.doSend = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        ContactRes.actionSend(item).then(
            function(response) {
                service.clearItem();

                MessageSvc.info('contact/send/success', {
                    values: [item.email]
                });
                $rootScope.$broadcast('hide-errors-check-validity');
            }
        );
    };

    service.clearItem = function() {
        service.item = {};
    };

    return service;
});