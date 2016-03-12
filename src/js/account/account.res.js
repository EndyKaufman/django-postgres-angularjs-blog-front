app.factory('AccountRes', function (AppConst, AppRes) {
    var service={};

    service.actionLogin=function(email, password){
        return AppRes.post('/account/login', {
            email: email,
            password: password
        });
    };

    service.actionLogout=function(){
        return AppRes.post('/account/logout');
    };

    service.actionReg=function(item){
        return AppRes.post('/account/reg', item);
    }

    service.actionRecovery=function(email){
        return AppRes.post('/account/recovery', {
            email: email
        });
    }

    service.actionResetpassword=function(code, password){
        return AppRes.post('/account/resetpassword', {
            code: code,
            password: password
        });
    };

    service.actionDelete=function(){
        return AppRes.post('/account/delete');
    }

    service.actionUpdate=function(item){
        return AppRes.post('/account/update', item);
    }

    return service;
  });