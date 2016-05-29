app.factory('ProfileSvc', function(AppConst, ProfileRes, $rootScope, $q, $modalBox, $modal, $routeParams, MessageSvc, AppSvc, AccountSvc) {
    var service = {};

    service.item = {};

    service.doUpdate = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        ProfileRes.actionUpdate(item).then(
            function(response) {
                AccountSvc.item = angular.copy(response.data[0]);
                AppConfig.user = AccountSvc.item;

                MessageSvc.info('account/update/success');
            }
        );
    };

    service.doDelete = function() {
        MessageSvc.confirm('account/delete/confirm', {},
            function() {
                ProfileRes.actionDelete().then(
                    function(response) {
                        AccountSvc.clearItem();

                        MessageSvc.info('account/delete/success');
                        NavbarSvc.goHome();
                    }
                );
            });
    };

    service.init = function(reload) {
        AccountSvc.init();
        service.item = AccountSvc.item;
    };

    return service;
});