app.factory('HtmlCacheSvc', function(AppConst, HtmlCacheRes, $rootScope, $q, $modalBox, $modal,
    $routeParams, MessageSvc, AppSvc, ManagerSvc, gettextCatalog, gettext, $timeout) {
    var service = {};

    service.item = {};
    service.list = [];

    service.clearItem = function() {
        service.item = {};
        service.item.url = '';
        service.item.content = '';
    };


    service.scanSitemap = {
        disabled: false,
        title: gettextCatalog.getString(AppConst.manager.html_cache.strings.scanSitemap_title),
        currentUrlIndex: 0,
        urls: [],
        timeout: 0,
        doUrl: function(callback) {
            var $this = this;
            $this.title = gettextCatalog.getString(AppConst.manager.html_cache.strings.scanSitemap_process) + '(' + $this.currentUrlIndex + '/' + $this.urls.length + ')';
            $this.disabled = true;
            HtmlCacheRes.getPage($this.urls[$this.currentUrlIndex]).then(function(response) {
                $this.currentUrlIndex++;
                $timeout(function() {
                    $this.timeout = 5000;
                    if ($this.currentUrlIndex == $this.urls.length) {
                        callback();
                    } else {
                        $this.doUrl(callback);
                    }
                }, $this.timeout);
            }, function(response) {
                $this.currentUrlIndex++;
                $timeout(function() {
                    $this.timeout = 5000;
                    if ($this.currentUrlIndex == $this.urls.length) {
                        callback();
                    } else {
                        $this.doUrl(callback);
                    }
                }, $this.timeout);
            });
        },
        do: function() {
            var $this = this;
            $this.title = gettextCatalog.getString(AppConst.manager.html_cache.strings.scanSitemap_process);
            $this.disabled = true;

            HtmlCacheRes.getSiteMap().then(function(response) {
                var locs = $(response).find('loc');

                $this.urls = [];
                var url = '',
                    i = 0;
                for (i = 0; i < locs.length; i++) {
                    url = $(locs[i]).text();
                    if (service.getItemByUrl(url) === false && $this.urls.indexOf(url) === -1)
                        $this.urls.push(url);
                }

                var hrefs = $(response).find('[href]');

                for (i = 0; i < hrefs.length; i++) {
                    url = $(hrefs[i]).attr('href');
                    if (service.getItemByUrl(url) === false && $this.urls.indexOf(url) === -1)
                        $this.urls.push(url);
                }
                $this.currentUrlIndex = 0;

                $this.doUrl(function() {
                    $this.title = gettextCatalog.getString(AppConst.manager.html_cache.strings.scanSitemap_title);
                    $this.disabled = false;
                    service.load(true);
                });

            });
        }
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

    service.getItemByUrl = function(url) {
        var item = false;
        for (var i = 0; i < service.list.length; i++) {
            if (service.list[i].url == 'url') {
                item = service.list[i];
                break;
            }
        }
        return item;
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
        for (var j = 0; j < service.list.length; j++) {
            if (service.list[j].CHECKED)
                service.checkeds.push(service.list[j]);
        }
    };

    service.doDeleteChecked = function(item) {
        MessageSvc.confirm('html_cache/delete_checked/confirm', {},
            function() {
                var actions = [];
                for (var j = 0; j < service.list.length; j++) {
                    if (service.list[j].CHECKED)
                        actions.push(HtmlCacheRes.actionDelete(service.list[j]));
                }
                $q.all(actions).then(function(responseList) {
                    for (var i = service.list.length - 1; i >= 0; i--) {
                        if (service.list[i].CHECKED) {
                            service.list.splice(i, 1);
                            break;
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

        $q.all([
            service.load()
        ]).then(function(responseList) {

        });
    };

    return service;
});