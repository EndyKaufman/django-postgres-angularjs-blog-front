app.factory('PostRes', function(AppConst, AppRes) {
    var service = {};

    service.getItem = function(name) {
        return AppRes.get('/api/v1/post/' + name);
    };
    service.getList = function() {
        return AppRes.get('/api/v1/post/');
    };
    service.getSearch = function(searchText) {
        if (searchText === undefined)
            searchText = 'all';
        return AppRes.get('/api/v1/post/search/' + searchText);
    };
    service.getListByTag = function(tagText) {
        return AppRes.get('/api/v1/post/list_by_tag/' + tagText);
    };
    service.actionUpdate = function(item) {
        return AppRes.post('/api/v1/post/update/' + item.id, item);
    };
    service.actionCreate = function(item) {
        return AppRes.post('/api/v1/post/create', item);
    };
    service.actionDelete = function(item) {
        return AppRes.post('/api/v1/post/delete/' + item.id, item);
    };

    return service;
});