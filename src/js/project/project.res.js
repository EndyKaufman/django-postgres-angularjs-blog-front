app.factory('ProjectRes', function (AppConst, AppRes) {
    var service={};

    service.getItem=function(name){
        return AppRes.get('/project/item/'+name);
    };
    service.getList=function(){
        return AppRes.get('/project/list');
    };
    service.getSearch=function(searchText){
        if (searchText==undefined)
            searchText='all';
        return AppRes.get('/project/search/'+searchText);
    };
    service.getListByTag=function(tagText){
        return AppRes.get('/project/listbytag/'+tagText);
    };
    service.actionUpdate=function(item){
        return AppRes.post('/project/update/'+item.id, item);
    }
    service.actionCreate=function(item){
        return AppRes.post('/project/create', item);
    }
    service.actionDelete=function(item){
        return AppRes.post('/project/delete/'+item.id, item);
    }

    return service;
  });