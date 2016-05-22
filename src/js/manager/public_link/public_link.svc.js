app.factory('PublicLinkSvc', function(AppConst, PublicLinkRes, $rootScope, $q, $modalBox, $modal, $routeParams, MessageSvc, AppSvc, ManagerSvc, gettext) {
    var service = {};

    service.item = {};
    service.list = [];

    service.clearItem = function() {
        service.item = {};
        service.item.src = '';
        service.item.title = '';
        service.item.description = '';
        service.item.icon = '';
        service.item.position = 0;
        service.item.in_header = 0;
        service.item.in_footer = 0;
        service.item.in_contact = 1;
    };

    service.showCreate = function() {
        service.mode = 'create';
        service.clearItem();
        var boxOptions = {
            title: gettext('Add new public link'),
            confirmTemplate: 'views/manager/public_link/create.modal.html',
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
            prefixEvent: 'public_linkCreate'
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
            title: gettext('Edit public link'),
            confirmTemplate: 'views/manager/public_link/update.modal.html',
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
            prefixEvent: 'public_linkUpdate'
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
        PublicLinkRes.actionCreate(item).then(
            function(data) {
                service.item = angular.copy(data[0]);
                service.list.push(service.item);
            }
        );
    };
    service.doUpdate = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        PublicLinkRes.actionUpdate(item).then(
            function(data) {
                service.item = angular.copy(data[0]);
                service.updateItemOnList(service.item);
            }
        );
    };
    service.doDelete = function(item) {
        MessageSvc.confirm('public_link/delete/confirm', {
                values: [item.title]
            },
            function() {
                PublicLinkRes.actionDelete(item).then(
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
            PublicLinkRes.getList().then(function(data) {
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
        ManagerSvc.init();

        $q.all([
            service.load()
        ]).then(function(dataList) {

        });
    };
    return service;
});