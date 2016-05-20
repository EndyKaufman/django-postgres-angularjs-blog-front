app.factory('ProfileSvc', function(AppConst, ProfileRes, $rootScope, $q, $modalBox, $modal, $routeParams, MessageSvc, AppSvc, AccountSvc) {
    var service = {};

    service.item = {};

    service.doUpdate = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        ProfileRes.actionUpdate(item).then(
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined && response.data.code == 'ok') {
                    AccountSvc.item = angular.copy(response.data.data[0]);
                    $rootScope.$broadcast('account.update', AccountSvc.item);
                }
            },
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined)
                    MessageSvc.error(response.data.code, response.data);
            }
        );
    };

    service.doDelete = function() {
        MessageSvc.confirm('account/delete/confirm', {},
            function() {
                ProfileRes.actionDelete().then(
                    function(response) {
                        if (response !== undefined && response.data !== undefined && response.data.code !== undefined && response.data.code == 'ok') {
                            AccountSvc.item = {};
                            $rootScope.$broadcast('account.delete', AccountSvc.item);
                        }
                    },
                    function(response) {
                        if (response !== undefined && response.data !== undefined && response.data.code !== undefined)
                            MessageSvc.error(response.data.code, response.data);
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