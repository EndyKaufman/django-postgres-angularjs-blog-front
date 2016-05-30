app.factory('TagConst', function(gettext) {
    return {
        strings: {
            title: gettext('Tags'),
            description: gettext('Tag: %s'),
            'status/loading': gettext('Loading...'),
            'status/not_found': gettext('No results found...')
        }
    };
});