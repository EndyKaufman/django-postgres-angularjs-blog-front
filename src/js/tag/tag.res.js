app.factory('TagRes', function (AppRes, AppConst) {
    var service={};

    service.getList=function(){
        return AppRes.get('/tag/list');
    };

    return service;
  });