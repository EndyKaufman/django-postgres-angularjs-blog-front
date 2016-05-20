app.factory('MetaTagRes', function($q, AppConst, AppRes) {
    var service = {};

    service.getList = function() {
        return AppRes.get('/api/v1/manager/meta_tag/list');
    };

    service.actionUpdate = function(item) {
        return AppRes.post('/api/v1/manager/meta_tag/update/' + item.id, item);
    };

    service.actionCreate = function(item) {
        return AppRes.post('/api/v1/manager/meta_tag/create', item);
    };
    service.actionDelete = function(item) {
        return AppRes.post('/api/v1/manager/meta_tag/delete/' + item.id, item);
    };

    return service;
});