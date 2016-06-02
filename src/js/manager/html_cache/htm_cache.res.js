app.factory('HtmlCacheRes', function($q, AppConst, AppRes) {
    var service = {};


    service.getList = function() {
        return AppRes.get('/api/v1/manager/html_cache/');
    };

    service.actionUpdate = function(item) {
        return AppRes.post('/api/v1/manager/html_cache/update/' + item.id, item);
    };

    service.actionCreate = function(item) {
        return AppRes.post('/api/v1/manager/html_cache/create', item);
    };
    service.actionDelete = function(item) {
        return AppRes.post('/api/v1/manager/html_cache/delete/' + item.id, item);
    };

    return service;
});