app.factory('PropertiesSvc', function(AppConst, AppProperties, PropertiesRes, $rootScope, $q, $modalBox, $modal, $routeParams, MessageSvc, AppSvc, ManagerSvc, gettext) {
    var service = {};

    service.item = {};
    service.list = [];

    service.clearItem = function() {
        service.item = {};
        service.item.name = '';
        service.item.value = '';
        service.item.comment = '';
    };

    service.showCreate = function() {
        service.mode = 'create';
        service.clearItem();
        var boxOptions = {
            title: gettext('Add new properties'),
            confirmTemplate: 'views/manager/properties/create.modal.html',
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
            prefixEvent: 'propertiesCreate'
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
            title: gettext('Edit properties'),
            confirmTemplate: 'views/manager/properties/update.modal.html',
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
            prefixEvent: 'propertiesUpdate'
        };
        $modalBox(boxOptions);
    };

    service.updateItemOnList = function(item) {
        for (var i = 0; i < service.list.length; i++) {
            if (item.id === service.list[i].id) {
                AppProperties.set(service.list[i].name, service.list[i].value);
                angular.extend(service.list[i], angular.copy(item));
            }
        }
    };

    service.doCreate = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        PropertiesRes.actionCreate(item).then(
            function(data) {
                service.item = angular.copy(data[0]);
                service.list.push(service.item);
                service.updateItemOnList(service.item);
            }
        );
    };
    service.doUpdate = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        PropertiesRes.actionUpdate(item).then(
            function(data) {
                service.item = angular.copy(data[0]);
                service.updateItemOnList(service.item);
            }
        );
    };
    service.doDelete = function(item) {
        MessageSvc.confirm('properties/delete/confirm', {
                values: [item.name]
            },
            function() {
                PropertiesRes.actionDelete(item).then(
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
            PropertiesRes.getList().then(function(data) {
                service.list = angular.copy(data);
                AppProperties.load(service.list);

                deferred.resolve(service.list);
            }, function(data) {
                service.list = [];
                AppProperties.load(service.list);
                deferred.resolve(service.list);
            });
        } else
            deferred.resolve(service.list);
        return deferred.promise;
    };

    service.init = function(reload) {
        ManagerSvc.init();

        $q.all([
            service.load()
        ]).then(function(dataList) {

        });
    };
    return service;
});