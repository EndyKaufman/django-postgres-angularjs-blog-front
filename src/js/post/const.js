app.factory('PostConst', function(gettext) {
    return {
        strings: {
            title: gettext('Posts'),
            description: gettext('Posts descriptions')
        },
        types: [{
            id: 1,
            title: gettext('Text')
        }, {
            id: 2,
            title: gettext('Html')
        }, {
            id: 3,
            title: gettext('Url')
        }, {
            id: 4,
            title: gettext('Markdown')
        }],
        message: {
            'post/delete/confirm': gettext('Do you really want to delete post <strong>%s</strong>?'),
            'post/create/success': gettext('Post <strong>%s</strong> created!'),
            'post/update/success': gettext('Post <strong>%s</strong> updated!'),
            'post/delete/success': gettext('Post <strong>%s</strong> deleted!')
        }
    };
});