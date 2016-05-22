app.run(function(AppSvc, AppConst, $route, $rootScope, $timeout) {

    $rootScope.$on('$routeChangeStart', function(event, current, previous) {
        $timeout(function() {
            var lang_short=null;

            if ($route.current !== undefined && $route.current.params !== undefined &&
                $route.current.params.lang_short !== undefined)
                lang_short=$route.current.params.lang_short;
            else
            if ($route.current !== undefined && $route.current.$$route !== undefined &&
                $route.current.$$route.params !== undefined &&
                $route.current.$$route.params.lang_short !== undefined)
                lang_short=$route.current.$$route.params.lang_short;

            if (lang_short!==null && AppConst.langs[lang_short]!==undefined)
                AppSvc.setLangCode(AppConst.langs[lang_short].code);
            else
                AppSvc.setLangCode();
        });
    });

    AppSvc.setLangCode();
});