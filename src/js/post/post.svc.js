app.factory('PostSvc', function($routeParams, $rootScope, $q, $location, AppConst,
    PostRes, TagSvc, MessageSvc, AppSvc, gettextCatalog, AppLang) {
    var service = {};

    service.item = {};
    service.list = [];

    service.countItemsOnRow = 2;
    service.limitOnHome = 3;
    service.limit = 10;
    service.begin = 0;

    $rootScope.$on('post.init.meta', function(event, current, previous) {
        service.initMeta();
    });

    service.setMeta = function() {
        if (service.postName !== undefined) {
            AppSvc.setTitle([service.item['title_'+AppLang.getCurrent()], service.title]);
            AppSvc.setDescription(service.item['description_'+AppLang.getCurrent()]);
            AppSvc.setUrl('post/' + service.postName);
            if (service.item.images.length > 0)
                AppSvc.setImage(service.item.images[0].src_url);
        } else {
            AppSvc.setTitle([service.title]);
            AppSvc.setDescription(service.description);
            AppSvc.setUrl('post');
        }
    };

    service.initMeta = function() {
        service.postName = $routeParams.postName;
        service.title = gettextCatalog.getString(AppConst.post.strings.title);
        service.description = gettextCatalog.getString(AppConst.post.strings.description);
    };

    service.init = function(reload) {
        service.initMeta();

        $q.all([
            TagSvc.load(),
            service.load()
        ]).then(function(responseList) {
            service.setMeta();
        });
    };

    service.goList = function() {
        $location.path(AppLang.getUrlPrefix() + '/post');
    };

    service.goItem = function(postName) {
        $location.path(AppLang.getUrlPrefix() + '/post/' + postName);
    };

    service.updateItemOnList = function(item) {
        for (var i = 0; i < service.list.length; i++) {
            if (item.id === service.list[i].id) {
                angular.extend(service.list[i], angular.copy(item));
            }
        }
    };

    service.doCreate = function(item) {
        service.slugName(item.name);
        $rootScope.$broadcast('show-errors-check-validity');
        PostRes.actionCreate(item).then(
            function(response) {
                if (response.data.reload_source.tag === true)
                    TagSvc.load(true);
                service.item = angular.copy(response.data[0]);
                service.list.push(service.item);
            }
        );
    };
    service.doUpdate = function(item) {
        service.slugName(item.name);
        $rootScope.$broadcast('show-errors-check-validity');
        PostRes.actionUpdate(item).then(
            function(response) {
                if (response.reload_source.tag === true)
                    TagSvc.load(true);
                service.item = angular.copy(response.data[0]);
                service.updateItemOnList(service.item);

                MessageSvc.info('post/update/success', {
                    values: [item.title]
                });
                service.goItem(item.name);
            }
        );
    };
    service.doDelete = function(item) {
        MessageSvc.confirm('post/delete/confirm', {
                values: [item.title]
            },
            function() {
                PostRes.actionDelete(item).then(
                    function(response) {
                        for (var i = 0; i < service.list.length; i++) {
                            if (service.list[i].id == item.id) {
                                service.list.splice(i, 1);
                                break;
                            }
                        }
                        service.clearItem();

                        MessageSvc.info('post/delete/success', {
                            values: [item.title]
                        });
                        service.goList();
                    }
                );
            });
    };

    service.doDeleteImage = function(index) {
        service.item.images.splice(index, 1);
    };
    service.doAddImage = function(text) {
        if (text === undefined)
            text = '';
        if (service.item.images === undefined)
            service.item.images = [];
        service.item.images.push({
            id: chance.guid(),
            title: text
        });
    };
    service.slugName = function(value) {
        if (service.item.id === undefined)
            service.item.name = getSlug(value, {
                lang: AppSvc.getCurrent(),
                uric: true
            });
    };
    service.clearItem = function() {
        service.item = {};
        /*service.title = '';
        service.name = '';
        service.description = '';
        service.url = '';
        service.text = '';
        service.html = '';
        service.markdown = '';*/
        service.item.type = 1;
        service.item.tags = [];
        service.item.images = [];
    };
    service.load = function(reload) {
        var deferred = $q.defer();
        if (service.postName !== undefined) {
            if (service.item.name !== service.postName)
                PostRes.getItem(service.postName).then(
                    function(response) {
                        service.item = angular.copy(response.data[0]);
                        deferred.resolve(service.item);
                    },
                    function(response) {
                        service.clearItem();
                        deferred.resolve(service.item);
                    }
                );
            else
                deferred.resolve(service.item);
        } else {
            if (service.loaded !== true || reload === true) {
                service.loaded = true;
                PostRes.getList().then(function(response) {
                    service.list = angular.copy(response.data);
                    deferred.resolve(service.list);
                }, function(response) {
                    service.list = [];
                    deferred.resolve(service.list);
                });
            } else
                deferred.resolve(service.list);
        }
        return deferred.promise;
    };
    return service;
});