app.factory('TagSvc', function($routeParams, $q, $rootScope, AppConst, TagRes, ProjectRes, PostRes, $modalBox, $modal, NavbarSvc, MessageSvc, AppSvc, ManagerSvc, gettextCatalog, gettext) {
    var service = {};

    service.item = {};
    service.list = [];
    service.allList = [];

    service.countItemsOnRow = 3;
    service.limitOnHome = 5;
    service.limit = 10;
    service.begin = 0;

    $rootScope.$on('$routeChangeStart', function(event, current, previous) {
        if (current.params !== undefined && $routeParams.navId != 'tag') {
            service.tagText = '';
        }
    });


    service.clearItem = function() {
        service.item = {};
        service.item.text = '';
        service.item.description = '';
    };

    service.showCreate = function() {
        service.mode = 'create';
        service.clearItem();
        var boxOptions = {
            title: gettext('Add new tag'),
            confirmTemplate: 'views/manager/tag/create.modal.html',
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
            prefixEvent: 'tagCreate'
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
            confirmTemplate: 'views/manager/tag/update.modal.html',
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
            prefixEvent: 'tagUpdate'
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
        TagRes.actionCreate(item).then(
            function(response) {
                service.item = angular.copy(response.data[0]);
                service.list.push(service.item);
            }
        );
    };
    service.doUpdate = function(item) {
        $rootScope.$broadcast('show-errors-check-validity');
        TagRes.actionUpdate(item).then(
            function(response) {
                service.item = angular.copy(response.data[0]);
                service.updateItemOnList(service.item);
            }
        );
    };
    service.doDelete = function(item) {
        MessageSvc.confirm('tag/delete/confirm', {
                values: [item.text]
            },
            function() {
                TagRes.actionDelete(item).then(
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

    service.setMeta = function() {
        if ($routeParams.tagText !== '')
            AppSvc.setTitle([$routeParams.tagText, service.title]);
        else
            AppSvc.setTitle([service.title]);

        AppSvc.setDescription(service.description);
        AppSvc.setUrl('tag/' + service.tagText);
    };

    service.initMeta = function() {
        service.tagText = $routeParams.tagText;

        if (service.tagText !== undefined) {
            service.title = vsprintf(gettextCatalog.getString(AppConst.tag.strings.title), [service.tagText]);
            service.description = vsprintf(gettextCatalog.getString(AppConst.tag.strings.description), [service.tagText]);
        }
    };

    service.init = function(reload) {
        service.initMeta();

        if (service.tagText !== undefined) {
            service.setMeta();

            service.allList = [];
            service.allListSumSize = 0;
            $q.all([
                service.load(),
                ProjectRes.getListByTag($routeParams.tagText),
                PostRes.getListByTag($routeParams.tagText)
            ]).then(function(responseList) {
                $rootScope.$broadcast('project.init.meta');
                $rootScope.$broadcast('post.init.meta');

                for (var i = 1; i < responseList.length; i++) {
                    if (responseList[i] && responseList[i].length > 0)
                        service.allListSumSize = service.allListSumSize + responseList[i].length;
                    if (i == 1)
                        service.allList.push({
                            name: 'project',
                            list: responseList[i]
                        });
                    if (i == 2)
                        service.allList.push({
                            name: 'post',
                            list: responseList[i]
                        });
                }
            });
        } else {
            ManagerSvc.init();

            $q.all([
                service.load()
            ]).then(function(responseList) {

            });
        }
    };

    service.searchTag = function(query) {
        var list = [];
        for (var i = 0; i < service.list.length; i++) {
            if (service.list[i].text.indexOf(query) != -1)
                list.push(service.list[i]);
        }
        return list;
    };

    service.load = function(reload) {
        var deferred = $q.defer();
        if (service.loaded !== true || reload === true) {
            service.loaded = true;
            TagRes.getList().then(function(response) {
                    service.list = angular.copy(response.data);
                    deferred.resolve(service.list);
                },
                function(response) {
                    service.list = [];
                    deferred.resolve(service.list);
                });
        } else
            deferred.resolve(service.list);
        return deferred.promise;
    };
    return service;
});