app.factory('ContactRes', function (AppConst, AppRes) {
    var service={};

    service.actionSend=function(item){
        return AppRes.post('/api/v1/contact/send', {
            username: item.username,
            email: item.email,
            message: item.message
        });
    };

    return service;
  });