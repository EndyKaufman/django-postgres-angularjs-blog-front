app.factory('AccountRes', function (AppConst, AppRes) {
    var service={};

    service.actionLogin=function(email, password){
        return AppRes.post('/api/v1/account/login', {
            email: email,
            password: password
        });
    };

    service.actionLogout=function(){
        return AppRes.post('/api/v1/account/logout');
    };

    service.actionReg=function(item){
        return AppRes.post('/api/v1/account/reg', item);
    }

    service.actionRecovery=function(email){
        return AppRes.post('/api/v1/account/recovery', {
            email: email
        });
    }

    service.actionResetPassword=function(code, password){
        return AppRes.post('/api/v1/account/reset_password', {
            code: code,
            password: password
        });
    };

    service.actionDelete=function(){
        return AppRes.post('/api/v1/account/delete');
    }

    service.actionUpdate=function(item){
        return AppRes.post('/api/v1/account/update', item);
    }

    return service;
  });