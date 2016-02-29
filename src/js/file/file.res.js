app.factory('FileRes', function ($q, AppConst, uiUploader, AppRes) {
    var service={};

    service.getList=function(){
        return AppRes.get('/file/list');
    };
    service.getSearch=function(searchText){
        if (searchText==undefined)
            searchText='all';
        return AppRes.get('/file/search/'+searchText);
    };

    service.actionUpdate=function(item){
        return AppRes.post('/file/update/'+item.id, item);
    }

    service.actionCreate=function(item){
        return AppRes.upload('/file/create',item)
    }
    service.actionDelete=function(item){
        return AppRes.post('/file/delete/'+item.id, item);
    }

    service.addFiles=function(files){
        service.files = AppRes.addFiles(files);
    }

    return service;
  });