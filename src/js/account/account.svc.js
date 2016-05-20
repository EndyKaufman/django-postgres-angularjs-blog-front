app.factory('AccountSvc', function($q, $location, AppConst, AccountRes, MessageSvc, $rootScope, NavbarSvc, AppSvc, $routeParams, $route) {
    var service = {};

    $rootScope.$on('account.update', function(event, data) {
        MessageSvc.info('account/update/success');
        AppConfig.user = service.item;
    });

    $rootScope.$on('account.create', function(event, data) {
        MessageSvc.info('account/create/success');
        AppConfig.user = service.item;
        NavbarSvc.goHome();
    });

    $rootScope.$on('account.login', function(event, data) {
        MessageSvc.info('account/login/success');
        AppConfig.user = service.item;
        NavbarSvc.goHome();
    });

    $rootScope.$on('account.doLogout', function(event, data) {
        service.doLogout();
    });

    $rootScope.$on('account.logout', function(event, data) {
        MessageSvc.info('account/logout/success');
        AppConfig.user = service.item;
        NavbarSvc.goHome();
    });

    $rootScope.$on('account.delete', function(event, data) {
        MessageSvc.info('account/delete/success');
        AppConfig.user = service.item;
        NavbarSvc.goHome();
    });

    $rootScope.$on('account.recovery', function(event, data) {
        service.goReset();
        MessageSvc.info('account/recovery/checkemail', {
            values: [data.email]
        });
    });

    service.item = {};

    service.goReset = function() {
        $location.path('/account/reset');
    };
    service.init = function(reload) {
        angular.extend($routeParams, $route.current.$$route.params);

        service.title = AppConst.account[$routeParams.subNavId].title;
        service.description = AppConst.account[$routeParams.subNavId].description;

        AppSvc.setTitle([service.title]);
        AppSvc.setDescription(service.description);
        AppSvc.setUrl('account/' + $routeParams.subNavId);

        if ($routeParams.subNavId == 'reset') {
            if ($routeParams.code !== undefined)
                service.item.code = $routeParams.code;
            else
                service.item.code = '';
        }

        $q.all([
            service.load()
        ]).then(function(responseList) {

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
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined && response.data.code == 'ok') {
                    service.item = angular.copy(response.data.data[0]);
                    $rootScope.$broadcast('account.create', service.item);
                }
            },
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined)
                    MessageSvc.error(response.data.code, response.data);
            }
        );
    };

    service.doRecovery = function() {
        $rootScope.$broadcast('show-errors-check-validity');
        AccountRes.actionRecovery(service.item.email).then(
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined && response.data.code == 'ok') {
                    $rootScope.$broadcast('account.recovery', {
                        email: email
                    });
                }
            },
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined)
                    MessageSvc.error(response.data.code, response.data);
            }
        );
    };

    service.doReset = function() {
        $rootScope.$broadcast('show-errors-check-validity');
        AccountRes.actionReset(service.item.code, service.item.password).then(
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined && response.data.code == 'ok') {
                    service.item = angular.copy(response.data.data[0]);
                    $rootScope.$broadcast('account.reset', {
                        code: code
                    });
                    $rootScope.$broadcast('account.login', service.item);
                }
            },
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined)
                    MessageSvc.error(response.data.code, response.data);
            }
        );
    };

    service.doLogin = function() {
        AccountRes.actionLogin(service.item.email, service.item.password).then(
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined && response.data.code == 'ok') {
                    service.item = angular.copy(response.data.data[0]);
                    $rootScope.$broadcast('account.login', service.item);
                }
            },
            function(response) {
                if (response !== undefined && response.data !== undefined && response.data.code !== undefined)
                    MessageSvc.error(response.data.code, response.data);
            }
        );
    };
    service.doLogout = function() {
        MessageSvc.confirm('account/logout/confirm', {},
            function() {
                AccountRes.actionLogout().then(
                    function(response) {
                        if (response !== undefined && response.data !== undefined && response.data.code !== undefined && response.data.code == 'ok') {
                            service.item = {};
                            $rootScope.$broadcast('account.logout', service.item);
                        }
                    },
                    function(response) {
                        if (response !== undefined && response.data !== undefined && response.data.code !== undefined)
                            MessageSvc.error(response.data.code, response.data);
                    }
                );
            });
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