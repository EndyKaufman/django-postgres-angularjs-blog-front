app.factory('SearchConst', function(gettext) {
    return {
        strings: {
            title: gettext('Search'),
            description: gettext('Search result for text "%s"'),
            'status/loading': gettext('Loading...'),
            'status/not_found': gettext('No results found...')
        }
    };
});