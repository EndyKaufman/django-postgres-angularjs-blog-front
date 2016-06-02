app.factory('ScanSitemapSvc', function($q, AppConst, gettextCatalog, gettext, ScanSitemapRes, $timeout, $rootScope) {
    var service = {};

    service.disabled = false;
    service.currentUrlIndex = 0;
    service.urls = [];
    service.timeout = 0;

    service.list = [];

    $rootScope.$on('lang.changed', function() {
        service.setMeta();
    });

    service.setMeta = function() {
        if (service.disabled)
            service.title = gettextCatalog.getString(AppConst.manager.html_cache.strings.scanSitemap_process) + '(' + service.currentUrlIndex + '/' + service.urls.length + ')';
        else
            service.title = gettextCatalog.getString(AppConst.manager.html_cache.strings.scanSitemap_title);
    };

    service.init = function(reload) {
        service.setMeta();
    };

    service.getItemByUrl = function(url) {
        var item = false;
        for (var i = 0; i < service.list.length; i++) {
            if (service.list[i].url == 'url') {
                item = service.list[i];
                break;
            }
        }
        return item;
    };

    service.doUrl = function(callback) {
        service.disabled = true;
        service.setMeta();
        ScanSitemapRes.getPage(service.urls[service.currentUrlIndex]).then(function(response) {
            service.currentUrlIndex++;
            $timeout(function() {
                service.timeout = 5000;
                if (service.currentUrlIndex == service.urls.length) {
                    callback();
                } else {
                    service.doUrl(callback);
                }
            }, service.timeout);
        }, function(response) {
            service.currentUrlIndex++;
            $timeout(function() {
                service.timeout = 5000;
                if (service.currentUrlIndex == service.urls.length) {
                    callback();
                } else {
                    service.doUrl(callback);
                }
            }, service.timeout);
        });
    };

    service.do = function(list) {
        var deferred = $q.defer();
        service.list = list;
        service.disabled = true;
        service.setMeta();

        ScanSitemapRes.getSiteMap().then(function(response) {
            var locs = $(response).find('loc');

            service.urls = [];
            var url = '',
                i = 0;
            for (i = 0; i < locs.length; i++) {
                url = $(locs[i]).text();
                if (service.getItemByUrl(url) === false && service.urls.indexOf(url) === -1)
                    service.urls.push(url);
            }

            var hrefs = $(response).find('[href]');

            for (i = 0; i < hrefs.length; i++) {
                url = $(hrefs[i]).attr('href');
                if (service.getItemByUrl(url) === false && service.urls.indexOf(url) === -1)
                    service.urls.push(url);
            }
            service.currentUrlIndex = 0;

            service.doUrl(function() {
                service.disabled = false;
                service.setMeta();
                deferred.resolve(true);
            });

        });
        return deferred.promise;
    };
    return service;
});