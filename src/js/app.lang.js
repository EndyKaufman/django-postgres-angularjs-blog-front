app.factory('AppLang', function($rootScope, $timeout, gettext, gettextCatalog) {
    var
        service = {},
        inited = false,
        siteLang = AppConfig.lang,
        currentLang = AppConfig.current_lang,
        currentLangUrlPrefix = '';

    service.langs = {
        'ru': gettext('RU'),
        'en': gettext('EN')
    };

    var key = null,
        title = null;
    for (var i = 0; i < AppConfig.lang_list.length; i++) {
        key = AppConfig.lang_list[i].code;
        title = AppConfig.lang_list[i].title;
        service.langs[key] = gettext(title);
    }

    service.getUrlPrefix = function() {
        return currentLangUrlPrefix;
    };

    service.getCurrent = function() {
        return currentLang;
    };

    service.setCurrent = function(code) {
        if (code === undefined)
            code = currentLang;

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