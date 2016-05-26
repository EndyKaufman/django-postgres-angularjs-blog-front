app.factory('AppSvc', function($rootScope, $q, $route, $timeout, $location, AppLang, AppProperties) {
    var service = {};

    service.item = {
        title: '',
        description: '',
        image: '',
        type: '',
        url: ''
    };

    $rootScope.$on('lang.changed', function() {
        $location.path(AppLang.getUrlPrefix() + service.item.url_short);
    });

    service.setTitle = function(items) {
        if (items === undefined) {
            service.item.title = AppProperties.get('SITE_TITLE');
            service.item.short_title = AppProperties.get('SITE_TITLE');
        } else {
            items.push(AppProperties.get('SITE_TITLE'));
            service.item.title = angular.copy(items).join(' - ');
            service.item.short_title = items[0];
        }
        $('title').html(service.item.title);
        $('meta[property="og:title"]').attr('content', service.item.short_title);
        service.setDescription();
        service.setImage();
        service.setType();
        service.setUrl();

        return service.item.title;
    };

    service.setDescription = function(text) {
        if (text === undefined)
            service.item.description = AppProperties.get('SITE_DESCRIPTION');
        else
            service.item.description = text;
        $('meta[name="description"]').attr('content', service.item.description);
        $('meta[property="og:description"]').attr('content', service.item.description);
        return service.item.description;
    };

    service.setImage = function(url) {
        if (url === undefined)
            service.item.image = AppProperties.get('SITE_LOGO');
        else
            service.item.image = url;
        $('link[rel="image_src"]').attr('href', service.item.image);
        $('meta[property="og:image"]').attr('content', service.item.image);
        return service.item.image;
    };

    service.setType = function(text) {
        if (text === undefined)
            service.item.type = 'website';
        else
            service.item.type = text;
        $('meta[property="og:type"]').attr('content', service.item.type);
        return service.item.type;
    };

    service.setUrl = function(url) {
        if (url === undefined) {
            service.item.url = AppConfig.host_name + AppLang.getUrlPrefix();
            service.item.url_short = '';
        } else {
            service.item.url = [AppConfig.host_name, AppLang.getUrlPrefix() + url].join('/');
            service.item.url_short = '/' + url;
        }
        $('meta[property="og:url"]').attr('content', service.item.url);
        return service.item.url;
    };

    service.init = function() {};

    return service;
});