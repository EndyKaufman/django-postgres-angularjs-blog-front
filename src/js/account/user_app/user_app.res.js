app.factory('UserAppRes', function($q, AppConst, AppRes) {
    var service = {};

    service.getList = function() {
        return AppRes.get('/api/v1/user_app/');
    };

    service.actionUpdate = function(item) {
        return AppRes.post('/api/v1/user_app/update/' + item.id, item);
    };

    service.actionCreate = function(item) {
        return AppRes.post('/api/v1/user_app/create', item);
    };
    service.actionDelete = function(item) {
        return AppRes.post('/api/v1/user_app/delete/' + item.id, item);
    };

    return service;
});