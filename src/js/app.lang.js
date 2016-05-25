app.factory('AppLang', function($rootScope, $timeout) {
    var
        service = {},
        inited = false,
        siteLang = AppConfig.lang,
        currentLang = AppConfig.current_lang,
        currentLangUrlPrefix = '';

    service.getUrlPrefix = function() {
        return currentLangUrlPrefix;
    };

    service.getCurrent = function() {
        return currentLang;
    };

    service.setCurrent = function(code) {
        if (code === undefined)
            code = siteLang;

        if (currentLang != code || inited === false) {
            inited = true;
            currentLang = code;
            if (currentLang != siteLang)
                currentLangUrlPrefix = '/' + currentLang;
            else
                currentLangUrlPrefix = '';

            gettextCatalog.debug = true;
            gettextCatalog.setCurrentLanguage(code);

            $timeout(function() {
                $rootScope.$broadcast('lang.changed', code);
            });
        }
    };

    return service;
});