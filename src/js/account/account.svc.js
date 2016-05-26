app.factory('AccountSvc', function(AppLang,$q, $location, AppConst, AccountRes, MessageSvc, $rootScope, NavbarSvc, AppSvc, $routeParams, $route, gettextCatalog) {
    var service = {};

    $rootScope.$on('account.do.logout', function(event, data) {
        service.doLogout();
    });

    service.item = {};

    service.goReset = function() {
        $location.path(AppLang.getUrlPrefix() + '/account/reset');
    };

    service.setMeta = function() {
        AppSvc.setTitle([service.title]);
        AppSvc.setDescription(service.description);
        AppSvc.setUrl('account/' + $routeParams.subNavId);
    };

    service.initMeta = function() {
        angular.extend($routeParams, $route.current.$$route.params);

        service.title = gettextCatalog.getString(AppConst.account[$routeParams.subNavId].title);
        service.description = gettextCatalog.getString(AppConst.account[$routeParams.subNavId].description);

        if ($routeParams.subNavId == 'reset') {
            if ($routeParams.code !== undefined)
                service.item.code = $routeParams.code;
            else
                service.item.code = '';
        }
    };

    service.init = function(reload) {
        service.initMeta();

        $q.all([
            service.load()
        ]).then(function(dataList) {
            service.setMeta();
        });
    };

    service.load = function() {
        var deferred = $q.defer();
        service.item = AppConfig.user;
        deferred.resolve(service.item);
        return deferred.promise;
    };

    service.doReg = function() {
        $rootScope.$broadcast('show-errors-check-validity');
        AccountRes.actionReg(service.item).then(
            function(data) {
                service.item = angular.copy(data[0]);
                AppConfig.user = service.item;

                MessageSvc.info('account/create/success');
                NavbarSvc.goHome();
            }
        );
    };

    service.doRecovery = function() {
        $rootScope.$broadcast('show-errors-check-validity');
        AccountRes.actionRecovery(service.item.email).then(
            function(data) {

                MessageSvc.info('account/recovery/check_email', {
                    values: [service.item.email]
                });
                service.goReset();
            }
        );
    };

    service.doReset = function() {
        $rootScope.$broadcast('show-errors-check-validity');
        AccountRes.actionReset(service.item.code, service.item.password).then(
            function(data) {
                service.item = angular.copy(data[0]);
                AppConfig.user = service.item;

                MessageSvc.info('account/login/success');
                NavbarSvc.goHome();
            }
        );
    };

    service.doLogin = function() {
        AccountRes.actionLogin(service.item.email, service.item.password).then(
            function(data) {
                service.item = angular.copy(data[0]);
                AppConfig.user = service.item;

                MessageSvc.info('account/login/success');
                NavbarSvc.goHome();
            }
        );
    };
    service.doLogout = function() {
        MessageSvc.confirm('account/logout/confirm', {},
            function() {
                AccountRes.actionLogout().then(
                    function(data) {
                        service.clearItem();

                        MessageSvc.info('account/logout/success');
                        NavbarSvc.goHome();
                    }
                );
            });
    };


    service.clearItem = function() {
        service.item = {};
        AppConfig.user = service.item;
    };

    service.isLogged = function() {
        return AppConfig.user.id !== undefined;
    };

    service.isAdmin = function() {
        return AppConfig.user !== undefined && AppConfig.user.roles !== undefined && AppConfig.user.roles.indexOf('admin') != -1;
    };

    service.isAuthor = function() {
        return AppConfig.user !== undefined && AppConfig.user.roles !== undefined && AppConfig.user.roles.indexOf('author') != -1;
    };

    service.isUser = function() {
        return AppConfig.user !== undefined && AppConfig.user.roles !== undefined && AppConfig.user.roles.indexOf('user') != -1;
    };

    return service;
});