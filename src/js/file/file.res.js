app.factory('FileRes', function ($q, AppConst, uiUploader, AppRes) {
    var service={};

    service.getList=function(){
        return AppRes.get('/api/v1/file/list');
    };
    service.getSearch=function(searchText){
        if (searchText==undefined)
            searchText='all';
        return AppRes.get('/api/v1/file/search/'+searchText);
    };

    service.actionUpdate=function(item){
        return AppRes.post('/api/v1/file/update/'+item.id, item);
    }

    service.actionCreate=function(item){
        return AppRes.upload('/api/v1/file/create',item)
    }
    service.actionDelete=function(item){
        return AppRes.post('/api/v1/file/delete/'+item.id, item);
    }

    service.addFiles=function(files){
        service.files = AppRes.addFiles(files);
    }

    return service;
  });