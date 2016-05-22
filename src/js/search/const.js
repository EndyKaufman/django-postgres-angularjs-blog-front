app.factory('SearchConst', function(gettext) {
    return {
        strings: {
            title: gettext('Search'),
            description: gettext('Search result for text "%s"')
        }
    };
});