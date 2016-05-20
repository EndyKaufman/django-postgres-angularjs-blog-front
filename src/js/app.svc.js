app.factory('AppSvc', function($rootScope, $q) {
    var service = {};

    service.item = {
        title: '',
        description: '',
        image: '',
        type: '',
        url: ''
    };

    service.properties = {};

    service.fillProperties = function(list) {
        service.properties = {};
        for (var i = 0; i < list.length; i++) {
            service.properties[list[i].name] = list[i].value;
        }
    };

    service.updateProperty = function(name, value) {
        service.properties[name] = value;
    };

    service.setTitle = function(items) {
        if (items === undefined) {
            service.item.title = service.properties.SITE_TITLE;
            service.item.short_title = service.properties.SITE_TITLE;
        } else {
            items.push(service.properties.SITE_TITLE);
            service.item.title = items.join(' - ');
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
            service.item.description = service.properties.SITE_DESCRIPTION;
        else
            service.item.description = text;
        $('meta[property="description"]').attr('content', service.item.description);
        $('meta[property="og:description"]').attr('content', service.item.description);
        return service.item.description;
    };

    service.setImage = function(url) {
        if (url === undefined)
            service.item.image = service.properties.SITE_LOGO;
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
        if (url === undefined)
            service.item.url = AppConfig.host_name;
        else
            service.item.url = [AppConfig.host_name, url].join('/');
        $('meta[property="og:url"]').attr('content', service.item.url);
        return service.item.url;
    };

    service.init = function() {
        service.properties = AppConfig.properties;
        service.setTitle();
        service.setDescription();
    };

    return service;
});