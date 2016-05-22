app.factory('ProjectConst', function(gettext) {
    return {
        strings: {
            title: gettext('Projects'),
            description: gettext('Projects descriptions')
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
            'project/delete/confirm': gettext('Do you really want to delete project <strong>%s</strong>?'),
            'project/create/success': gettext('Project <strong>%s</strong> created!'),
            'project/update/success': gettext('Project <strong>%s</strong> updated!'),
            'project/delete/success': gettext('Project <strong>%s</strong> deleted!')
        }
    };
});