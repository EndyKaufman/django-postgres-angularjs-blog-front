app.run(function(AppLang, $route, $rootScope, $timeout) {

    $rootScope.$on('$routeChangeStart', function(event, current, previous) {
        $timeout(function() {
            var lang=null;

            if ($route.current !== undefined && $route.current.params !== undefined &&
                $route.current.params.lang !== undefined)
                lang=$route.current.params.lang;
            else
            if ($route.current !== undefined && $route.current.$$route !== undefined &&
                $route.current.$$route.params !== undefined &&
                $route.current.$$route.params.lang !== undefined)
                lang=$route.current.$$route.params.lang;

            if (lang!==null && AppLang.langs[lang]!==undefined)
                AppLang.setCurrent(lang);
            else
                AppLang.setCurrent();
        });
    });

    AppLang.setCurrent();
});