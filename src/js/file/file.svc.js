app.factory('FileSvc', function(AppConst, FileRes, $rootScope, $q, $modalBox, $modal, MessageSvc, gettext) {
    var service = {};

    $rootScope.$on('fileCreate.show', function(event, item) {
        var element = document.getElementById('FileUpload');
        element.addEventListener('change', function(e) {
            var files = e.target.files;
            FileRes.addFiles(files);
        });
    });

    service.item = {};
    service.list = [];

    service.showList = function(item) {
        service.clearItem();
        service.load().then(function() {
            for (var i = 0; i < service.list.length; i++) {
                if (item.src == service.list[i].src)
                    service.item = service.list[i];
            }
            var boxOptions = {
                title: gettext('Select file'),
                confirmTemplate: 'views/file/list.modal.html',
                size: 'lg',
                boxType: 'confirm',
                theme: 'alert',
                effect: false,
                confirmText: gettext('Select'),
                cancelText: gettext('Cancel'),
                afterConfirm: function() {
                    if (item.src !== service.item.src) {
                        delete item.id;
                        item.src = service.item.src;
                        item.src_url = service.item.src_url;
                    }
                },
                afterCancel: function() {

                },
                prefixEvent: 'fileList'
            };
            $modalBox(boxOptions);
        });
    };

    service.clearItem = function() {
        service.item = {};
        service.item.comment = '';
        service.item.src = '';
    };

    service.showCreate = function() {
        service.mode = 'create';
        service.clearItem();
        var boxOptions = {
            title: gettext('Add new file'),
            confirmTemplate: 'views/file/create.modal.html',
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
            prefixEvent: 'fileCreate'
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
            title: gettext('Edit file properties'),
            confirmTemplate: 'views/file/update.modal.html',
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
            prefixEvent: 'fileUpdate'
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
        FileRes.actionCreate(item).then(
            function(response) {
                service.item = angular.copy(response.data[0]);
                service.list.push(service.item);
            }
        );
    };
    service.doUpdate = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        FileRes.actionUpdate(item).then(
            function(response) {
                service.item = angular.copy(response.data[0]);
                service.updateItemOnList(service.item);
            }
        );
    };
    service.doDelete = function(item) {
        MessageSvc.confirm('file/delete/confirm', {
                values: [item.src]
            },
            function() {
                FileRes.actionDelete(item).then(
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
            FileRes.getList().then(function(response) {
                service.list = angular.copy(response.data);
                deferred.resolve(service.list);
                $rootScope.$broadcast('file.load', service.list);
            }, function(response) {
                service.list = [];
                deferred.resolve(service.list);
            });
        } else
            deferred.resolve(service.list);
        return deferred.promise;
    };

    service.doSearch = function(text) {
        var deferred = $q.defer();
        FileRes.getSearch(text).then(function(response) {
            service.list = angular.copy(response.data);
            deferred.resolve(service.list);
            $rootScope.$broadcast('file.load', service.list);
        }, function(response) {
            service.list = [];
            deferred.resolve(service.list);
        });
        return deferred.promise;
    };

    return service;
});