app.factory('UserAppSvc', function(AppConst, UserAppRes, $rootScope, $q, $modalBox, $modal, $routeParams, MessageSvc, AppSvc, AccountSvc) {
    var service = {};

    service.item = {};
    service.list = [];

    service.initEmptyItem = function() {
        service.item = {};
        service.item.name = '';
        service.item.content = '';
        service.item.attributes = '';
        service.item.position = 0;
    };

    service.showCreate = function() {
        service.mode = 'create';
        service.initEmptyItem();
        var boxOptions = {
            title: 'Add new user_app',
            confirmTemplate: 'views/account/user_app/create.modal.html',
            size: 'lg',
            boxType: 'confirm',
            theme: 'alert',
            effect: false,
            confirmText: 'Create',
            cancelText: 'Cancel',
            afterConfirm: function() {
                service.doCreate(service.item);
            },
            afterCancel: function() {

            },
            prefixEvent: 'user_appCreate'
        };
        $modalBox(boxOptions);
    };

    service.selectItem = function(item) {
        service.item = angular.copy(item);
    };

    service.showUpdate = function(item) {
        service.mode = 'update';
        service.item = angular.copy(item);
        var boxOptions = {
            title: 'Edit properties',
            confirmTemplate: 'views/account/user_app/update.modal.html',
            size: 'lg',
            boxType: 'confirm',
            theme: 'alert',
            effect: false,
            confirmText: 'Save',
            cancelText: 'Cancel',
            afterConfirm: function() {
                service.doUpdate(service.item);
            },
            afterCancel: function() {

            },
            prefixEvent: 'user_appUpdate'
        };
        $modalBox(boxOptions);
    };

    service.updateItemOnList = function(item) {
        for (var i = 0; i < service.list.length; i++) {
            if (item.id === service.list[i].id) {
                angular.extend(service.list[i], angular.copy(item));
            }
        }
    };

    service.doCreate = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        UserAppRes.actionCreate(item).then(
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined && response.data.code == 'ok') {
                    service.item = angular.copy(response.data.data[0]);
                    service.list.push(service.item);
                    $rootScope.$broadcast('user_app.create', service.item);
                }
            },
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined)
                    MessageSvc.error(response.data.code, response.data);
            }
        );
    };
    service.doUpdate = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        UserAppRes.actionUpdate(item).then(
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined && response.data.code == 'ok') {
                    service.item = angular.copy(response.data.data[0]);
                    service.updateItemOnList(service.item);

                    $rootScope.$broadcast('user_app.update', service.item);
                }
            },
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined)
                    MessageSvc.error(response.data.code, response.data);
            }
        );
    };
    service.doDelete = function(item) {
        MessageSvc.confirm('user_app/remove/confirm', {
                values: [item.src]
            },
            function() {
                UserAppRes.actionDelete(item).then(
                    function(response) {
                        if (response !== undefined && response.data !== undefined && response.data.code !== undefined && response.data.code == 'ok') {
                            for (var i = 0; i < service.list.length; i++) {
                                if (service.list[i].id == item.id) {
                                    service.list.splice(i, 1);
                                    break;
                                }
                            }
                            service.item = {};
                            $rootScope.$broadcast('user_app.delete', item);
                        }
                    },
                    function(response) {
                        if (response !== undefined && response.data !== undefined && response.data.code !== undefined)
                            MessageSvc.error(response.data.code, response.data);
                    }
                );
            });
    };

    service.load = function(reload) {
        var deferred = $q.defer();
        if (service.loaded !== true || reload === true) {
            service.loaded = true;
            UserAppRes.getList().then(function(response) {
                service.list = angular.copy(response.data.data);
                deferred.resolve(service.list);
                $rootScope.$broadcast('user_app.load', service.list);
            }, function(response) {
                service.list = [];
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined)
                    MessageSvc.error(response.data.code, response.data);
                deferred.resolve(service.list);
            });
        } else
            deferred.resolve(service.list);
        return deferred.promise;
    };

    service.init = function(reload) {
        AccountSvc.init();

        $q.all([
            service.load()
        ]).then(function(responseList) {

        });
    };
    return service;
});