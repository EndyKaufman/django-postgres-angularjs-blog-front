app.factory('ScanSitemapRes', function($q, AppConst, AppRes) {
    var service = {};

    service.getSiteMap = function() {
        return AppRes.get('/sitemap.xml');
    };

    service.getPage = function(url) {
        return AppRes.get(url + '?_escaped_fragment_=');
    };

    return service;
});