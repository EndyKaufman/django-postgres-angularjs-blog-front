app.factory('MetaTagSvc', function(AppConst, MetaTagRes, $rootScope, $q, $modalBox, $modal, $routeParams, MessageSvc, AppSvc, ManagerSvc, gettext) {
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
            title: gettext('Add new meta tag'),
            confirmTemplate: 'views/manager/meta_tag/create.modal.html',
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
            prefixEvent: 'meta_tagCreate'
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
            title: gettext('Edit meta tag'),
            confirmTemplate: 'views/manager/meta_tag/update.modal.html',
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
            prefixEvent: 'meta_tagUpdate'
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
        MetaTagRes.actionCreate(item).then(
            function(response) {
                service.item = angular.copy(response.data[0]);
                service.list.push(service.item);
            }
        );
    };
    service.doUpdate = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        MetaTagRes.actionUpdate(item).then(
            function(response) {
                service.item = angular.copy(response.data[0]);
                service.updateItemOnList(service.item);
            }
        );
    };
    service.doDelete = function(item) {
        MessageSvc.confirm('meta_tag/delete/confirm', {
                values: [item.name]
            },
            function() {
                MetaTagRes.actionDelete(item).then(
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

    service.load = function(reload) {
        var deferred = $q.defer();
        if (service.loaded !== true || reload === true) {
            service.loaded = true;
            MetaTagRes.getList().then(function(response) {
                service.list = angular.copy(response.data);
                deferred.resolve(service.list);
            }, function(response) {
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
        ]).then(function(responseList) {

        });
    };
    return service;
});