app.factory('AccountRes', function(AppConst, AppRes) {
    var service = {};

    service.actionLogin = function(email, password) {
        return AppRes.post('/api/v1/account/login', {
            email: email,
            password: password
        });
    };

    service.actionLogout = function() {
        return AppRes.post('/api/v1/account/logout');
    };

    service.actionReg = function(item) {
        return AppRes.post('/api/v1/account/reg', item);
    };

    service.actionRecovery = function(email) {
        return AppRes.post('/api/v1/account/recovery', {
            email: email
        });
    };

    service.actionReset = function(code, password) {
        return AppRes.post('/api/v1/account/reset', {
            code: code,
            password: password
        });
    };

    return service;
});