app.factory('TagConst', function(gettext) {
    return {
        strings: {
            title: gettext('Tags'),
            description: gettext('Tag: %s')
        }
    };
});