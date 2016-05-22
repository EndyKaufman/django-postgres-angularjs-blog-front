app.factory('UserAppSvc', function(AppConst, UserAppRes, $rootScope, $q, $modalBox, $modal, $routeParams, MessageSvc, AppSvc, AccountSvc, gettext) {
    var service = {};

    service.item = {};
    service.list = [];

    service.clearItem = function() {
        service.item = {};
        service.item.name = '';
        service.item.content = '';
        service.item.attributes = '';
        service.item.position = 0;
    };

    service.showCreate = function() {
        service.mode = 'create';
        service.clearItem();
        var boxOptions = {
            title: gettext('Add new application'),
            confirmTemplate: 'views/account/user_app/create.modal.html',
            size: 'lg',
            boxType: 'confirm',
            theme: 'alert',
            effect: false,
            confirmText: gettext('Create'),
            cancelText: gettext('Cancel'),
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
            title: gettext('Edit application'),
            confirmTemplate: 'views/account/user_app/update.modal.html',
            size: 'lg',
            boxType: 'confirm',
            theme: 'alert',
            effect: false,
            confirmText: gettext('Save'),
            cancelText: gettext('Cancel'),
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
            function(data) {
                service.item = angular.copy(data[0]);
                service.list.push(service.item);
            }
        );
    };
    service.doUpdate = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        UserAppRes.actionUpdate(item).then(
            function(data) {
                service.item = angular.copy(data[0]);
                service.updateItemOnList(service.item);
            }
        );
    };
    service.doDelete = function(item) {
        MessageSvc.confirm('user_app/delete/confirm', {
                values: [item.name]
            },
            function() {
                UserAppRes.actionDelete(item).then(
                    function(data) {
                        for (var i = 0; i < service.list.length; i++) {
                            if (service.list[i].id == item.id) {
                                service.list.splice(i, 1);
                                break;
                            }
                        }
                        service.clearItem();
                    }
                );
            });
    };

    service.load = function(reload) {
        var deferred = $q.defer();
        if (service.loaded !== true || reload === true) {
            service.loaded = true;
            UserAppRes.getList().then(function(data) {
                service.list = angular.copy(data);
                deferred.resolve(service.list);
            }, function(data) {
                service.list = [];
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
        ]).then(function(dataList) {

        });
    };
    return service;
});