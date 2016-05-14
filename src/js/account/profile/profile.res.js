app.factory('ProfileRes', function ($q, AppConst, AppRes) {
    var service={};

    service.actionDelete=function(){
        return AppRes.post('/api/v1/account/delete');
    }

    service.actionUpdate=function(item){
        return AppRes.post('/api/v1/account/update', item);
    }

    return service;
  });