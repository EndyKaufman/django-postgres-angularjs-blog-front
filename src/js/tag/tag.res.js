app.factory('TagRes', function (AppRes, AppConst) {
    var service={};

    service.getList=function(){
        return AppRes.get('/api/v1/tag/list');
    };

    return service;
  });