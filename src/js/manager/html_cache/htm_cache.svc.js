app.factory('HtmlCacheSvc', function(AppConst, HtmlCacheRes, $rootScope, $q, $modalBox, $modal,
    $routeParams, MessageSvc, AppSvc, ManagerSvc, gettextCatalog, gettext, $timeout, ScanSitemapSvc) {
    var service = {};

    service.item = {};
    service.list = [];

    service.clearItem = function() {
        service.item = {};
        service.item.url = '';
        service.item.content = '';
    };

    service.showCreate = function() {
        service.mode = 'create';
        service.clearItem();
        var boxOptions = {
            title: gettext('Add new html cache'),
            confirmTemplate: 'views/manager/html_cache/create.modal.html',
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
            prefixEvent: 'html_cacheCreate'
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
            title: gettext('Edit html cache'),
            confirmTemplate: 'views/manager/html_cache/update.modal.html',
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
            prefixEvent: 'html_cacheUpdate'
        };
        $modalBox(boxOptions);
    };

    service.doScanSitemap=function(){
        ScanSitemapSvc.do(service.list).then(function(){
            service.load(true);
        });
    };

    service.updateItemOnList = function(item) {
        for (var i = 0; i < service.list.length; i++) {
            if (item.id === service.list[i].id) {
                angular.extend(service.list[i], angular.copy(item));
            }
        }
    };

    service.doCheckAll = function(checked) {
        for (var i = 0; i < service.list.length; i++) {
            service.list[i].CHECKED = checked;
        }
        service.collectCheckedItems();
    };

    service.doCreate = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        HtmlCacheRes.actionCreate(item).then(
            function(response) {
                service.item = angular.copy(response.data[0]);
                service.list.push(service.item);
            }
        );
    };
    service.doUpdate = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        HtmlCacheRes.actionUpdate(item).then(
            function(response) {
                service.item = angular.copy(response.data[0]);
                service.updateItemOnList(service.item);
            }
        );
    };
    service.doDelete = function(item) {
        MessageSvc.confirm('html_cache/delete/confirm', {
                values: [item.url]
            },
            function() {
                HtmlCacheRes.actionDelete(item).then(
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

    service.checkeds=[];

    service.collectCheckedItems=function(){
        service.checkeds=[];
        var j=0, len=service.list.length;
        for (j = 0; j < len; j++) {
            if (service.list[j].CHECKED)
                service.checkeds.push(service.list[j].ID);
        }
    };

    service.doDeleteChecked = function(item) {
        MessageSvc.confirm('html_cache/delete_checked/confirm', {},
            function() {
                var actions = [],j=0, len=service.list.length;
                for (j = 0; j < len; j++) {
                    if (service.list[j].CHECKED){
                        actions.push(HtmlCacheRes.actionDelete(service.list[j]));
                    }
                }
                $q.all(actions).then(function(responseList) {
                    for (j = len - 1; j >= 0; j--) {
                        if (service.list[j].CHECKED) {
                            service.list.splice(j, 1);
                        }
                    }
                    service.clearItem();
                    service.collectCheckedItems();
                });
            });
    };

    service.load = function(reload) {
        var deferred = $q.defer();
        if (service.loaded !== true || reload === true) {
            service.loaded = true;
            HtmlCacheRes.getList().then(function(response) {
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
        ScanSitemapSvc.init();

        $q.all([
            service.load()
        ]).then(function(responseList) {

        });
    };

    return service;
});