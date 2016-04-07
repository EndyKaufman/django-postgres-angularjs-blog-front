app.factory('PostRes', function (AppConst, AppRes) {
    var service={};

    service.getItem=function(name){
        return AppRes.get('/post/item/'+name);
    };
    service.getList=function(){
        return AppRes.get('/post/list');
    };
    service.getSearch=function(searchText){
        if (searchText==undefined)
            searchText='all';
        return AppRes.get('/post/search/'+searchText);
    };
    service.getListByTag=function(tagText){
        return AppRes.get('/post/listbytag/'+tagText);
    };
    service.actionUpdate=function(item){
        return AppRes.post('/post/update/'+item.id, item);
    }
    service.actionCreate=function(item){
        return AppRes.post('/post/create', item);
    }
    service.actionDelete=function(item){
        return AppRes.post('/post/delete/'+item.id, item);
    }

    return service;
  });