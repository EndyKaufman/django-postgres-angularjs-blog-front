app.factory('HtmlCacheRes', function($q, AppConst, AppRes) {
    var service = {};

    service.getSiteMap = function() {
        return AppRes.get('/sitemap.xml');
    };

    service.getPage = function(url) {
        var config = {
            headers: {}
        };
        return AppRes.get(url + '?_escaped_fragment_=', config);
    };

    service.getList = function() {
        return AppRes.get('/api/v1/manager/html_cache/list');
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