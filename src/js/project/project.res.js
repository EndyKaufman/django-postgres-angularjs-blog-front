app.factory('ProjectRes', function(AppConst, AppRes) {
    var service = {};

    service.getItem = function(name) {
        return AppRes.get('/api/v1/project/item/' + name);
    };
    service.getList = function() {
        return AppRes.get('/api/v1/project/list');
    };
    service.getSearch = function(searchText) {
        if (searchText === undefined)
            searchText = 'all';
        return AppRes.get('/api/v1/project/search/' + searchText);
    };
    service.getListByTag = function(tagText) {
        return AppRes.get('/api/v1/project/listbytag/' + tagText);
    };
    service.actionUpdate = function(item) {
        return AppRes.post('/api/v1/project/update/' + item.id, item);
    };
    service.actionCreate = function(item) {
        return AppRes.post('/api/v1/project/create', item);
    };
    service.actionDelete = function(item) {
        return AppRes.post('/api/v1/project/delete/' + item.id, item);
    };

    return service;
});