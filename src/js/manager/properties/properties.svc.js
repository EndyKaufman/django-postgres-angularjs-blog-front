app.factory('PropertiesSvc', function(AppConst, AppProperties, PropertiesRes, $rootScope, $q,
    $modalBox, $modal, $routeParams, MessageSvc, AppSvc, ManagerSvc, gettext, gettextCatalog, $window) {
    var service = {};

    service.item = {};
    service.list = [];

    $rootScope.$on('lang.changed', function() {
        AppProperties.load(service.list);
    });

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
                angular.extend(service.list[i], angular.copy(item));
                AppProperties.update(service.list[i]);
            }
        }
    };

    service.doCreate = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        PropertiesRes.actionCreate(item).then(
            function(response) {
                service.item = angular.copy(response.data[0]);
                service.list.push(service.item);
                service.updateItemOnList(service.item);
            }
        );
    };
    service.doUpdate = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        PropertiesRes.actionUpdate(item).then(
            function(response) {
                service.item = angular.copy(response.data[0]);
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
                    function(response) {
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

    service.applyOnSite = {
        disabled: false,
        title: gettextCatalog.getString(AppConst.manager.properties.strings.applyOnSite_title),
        do: function() {
            var $this = this;
            $this.title = gettextCatalog.getString(AppConst.manager.properties.strings.applyOnSite_process);
            $this.disabled = true;

            PropertiesRes.actionApplyOnSite().then(function(response) {
                $this.title = gettextCatalog.getString(AppConst.manager.properties.strings.applyOnSite_title);
                $this.disabled = false;
                service.load(true);
                $window.location.reload();
            });
        }
    };

    service.load = function(reload) {
        var deferred = $q.defer();
        if (service.loaded !== true || reload === true) {
            service.loaded = true;
            PropertiesRes.getList().then(function(response) {
                service.list = angular.copy(response.data);
                AppProperties.load(service.list);

                deferred.resolve(service.list);
            }, function(response) {
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
        ]).then(function(responseList) {

        });
    };
    return service;
});