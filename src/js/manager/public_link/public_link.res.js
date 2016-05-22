app.factory('PublicLinkRes', function($q, AppConst, AppRes) {
    var service = {};

    service.getList = function() {
        return AppRes.get('/api/v1/manager/public_link/');
    };

    service.actionUpdate = function(item) {
        return AppRes.post('/api/v1/manager/public_link/update/' + item.id, item);
    };

    service.actionCreate = function(item) {
        return AppRes.post('/api/v1/manager/public_link/create', item);
    };
    service.actionDelete = function(item) {
        return AppRes.post('/api/v1/manager/public_link/delete/' + item.id, item);
    };

    return service;
});