app.factory('TagRes', function(AppRes, AppConst) {
    var service = {};

    service.getList = function() {
        return AppRes.get('/api/v1/tag/');
    };

    service.actionUpdate = function(item) {
        return AppRes.post('/api/v1/tag/update/' + item.id, item);
    };

    service.actionCreate = function(item) {
        return AppRes.post('/api/v1/tag/create', item);
    };
    service.actionDelete = function(item) {
        return AppRes.post('/api/v1/tag/delete/' + item.id, item);
    };

    return service;
});