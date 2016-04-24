app.factory('PropertiesRes', function ($q, AppConst, AppRes) {
    var service={};

    service.getList=function(){
        return AppRes.get('/api/v1/manager/properties/list');
    };

    service.actionUpdate=function(item){
        return AppRes.post('/api/v1/manager/properties/update/'+item.id, item);
    }

    service.actionCreate=function(item){
        return AppRes.post('/api/v1/manager/properties/create',item)
    }
    service.actionDelete=function(item){
        return AppRes.post('/api/v1/manager/properties/delete/'+item.id, item);
    }

    return service;
  });