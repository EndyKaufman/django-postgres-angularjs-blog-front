app.factory('SearchSvc', function($rootScope, $routeParams, $q, $location, AppConst,
    NavbarSvc, TagSvc, ProjectRes, PostRes, AppSvc, gettextCatalog, AppLang) {
    var service = {};

    service.allList = [];

    service.countItemsOnRow = 3;
    service.limitOnHome = 3;
    service.limit = 10;
    service.begin = 0;

    service.searchText = '';

    $rootScope.$on('$routeChangeStart', function(event, current, previous) {
        if ($routeParams.navId != 'search') {
            service.searchText = '';
        }
    });

    service.doSearch = function(searchText) {
        $location.path(AppLang.getUrlPrefix() + '/search/' + searchText);
    };

    service.setMeta = function() {
        AppSvc.setTitle([service.title]);
        AppSvc.setDescription(service.description);
        AppSvc.setUrl('search/' + service.searchText);
    };

    service.initMeta = function() {
        service.searchText = $routeParams.searchText;

        service.title = vsprintf(gettextCatalog.getString(AppConst.search.strings.title), [service.searchText]);
        service.description = vsprintf(gettextCatalog.getString(AppConst.search.strings.description), [service.searchText]);
    };

    service.init = function(reload) {
        service.initMeta();
        service.setMeta();

        if ($routeParams.searchText !== undefined) {
            service.allList = [];
            service.allListSumSize = 0;
            $q.all([
                TagSvc.load(),
                ProjectRes.getSearch($routeParams.searchText),
                PostRes.getSearch($routeParams.searchText)
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
        }
    };
    return service;
});