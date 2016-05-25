app.config(function($routeProvider, $locationProvider) {
  var routes = {
    '/manager/meta_tag': {
      templateUrl: 'views/manager/meta_tag.html',
      controller: 'MetaTagCtrl',
      params: {
        navId: 'manager',
        subNavId: 'meta_tag'
      }
    },
    '/manager/public_link': {
      templateUrl: 'views/manager/public_link.html',
      controller: 'PublicLinkCtrl',
      params: {
        navId: 'manager',
        subNavId: 'public_link'
      }
    },
    '/manager/properties': {
      templateUrl: 'views/manager/properties.html',
      controller: 'PropertiesCtrl',
      params: {
        navId: 'manager',
        subNavId: 'properties'
      }
    },
    '/manager/tag': {
      templateUrl: 'views/manager/tag.html',
      controller: 'TagCtrl',
      params: {
        navId: 'manager',
        subNavId: 'tag'
      }
    },
    '/manager/html_cache': {
      templateUrl: 'views/manager/html_cache.html',
      controller: 'HtmlCacheCtrl',
      params: {
        navId: 'manager',
        subNavId: 'html_cache'
      }
    }
  };

  for (var url in routes) {
    $routeProvider
      .when(url, routes[url])
      .when('/:lang' + url, routes[url]);
  }
});