app.factory('ManagerConst', function(gettext) {
    return {
        strings: {
            title: gettext('Manager'),
            url: 'manager/meta_tag',
            description: gettext('Manager descriptions')
        },
        meta_tag: {
            title: gettext('Meta tags'),
            description: gettext('Meta tags')
        },
        tag: {
            title: gettext('Tags'),
            description: gettext('Tags')
        },
        public_link: {
            title: gettext('Public links'),
            description: gettext('Public links')
        },
        properties: {
            title: gettext('Properties'),
            description: gettext('Properties')
        },
        users: {
            title: gettext('Users'),
            description: gettext('Site users')
        },
        html_cache: {
            title: gettext('Html cache'),
            description: gettext('Html cache'),
            strings: {
                scanSitemap_title: gettext('Create from sitemap.xml'),
                scanSitemap_process: gettext('Filling from sitemap.xml...')
            }
        },
            message: {
                'html_cache/delete/confirm': gettext('Do you really want to delete html cache <strong>%s</strong>?'),
                'html_cache/create/success': gettext('Cache <strong>%s</strong> created!'),
                'html_cache/update/success': gettext('Cache <strong>%s</strong> updated!'),
                'html_cache/delete/success': gettext('Cache <strong>%s</strong> deleted!'),

                'users/delete/confirm': gettext('Do you really want to delete user <strong>%s</strong>?'),
                'users/create/success': gettext('User <strong>%s</strong> created!'),
                'users/update/success': gettext('User <strong>%s</strong> updated!'),
                'users/delete/success': gettext('User <strong>%s</strong> deleted!'),

                'properties/delete/confirm': gettext('Do you really want to delete property <strong>%s</strong>?'),
                'properties/create/success': gettext('Property <strong>%s</strong> created!'),
                'properties/update/success': gettext('Property <strong>%s</strong> updated!'),
                'properties/delete/success': gettext('Property <strong>%s</strong> deleted!'),

                'public_link/delete/confirm': gettext('Do you really want to delete public link <strong>%s</strong>?'),
                'public_link/create/success': gettext('Public link <strong>%s</strong> created!'),
                'public_link/update/success': gettext('Public link <strong>%s</strong> updated!'),
                'public_link/delete/success': gettext('Public link <strong>%s</strong> deleted!'),

                'tag/delete/confirm': gettext('Do you really want to delete tag <strong>%s</strong>?'),
                'tag/create/success': gettext('Tag <strong>%s</strong> created!'),
                'tag/update/success': gettext('Tag <strong>%s</strong> updated!'),
                'tag/delete/success': gettext('Tag <strong>%s</strong> deleted!'),

                'meta_tag/delete/confirm': gettext('Do you really want to delete meta tag <strong>%s</strong>?'),
                'meta_tag/create/success': gettext('Meta tag <strong>%s</strong> created!'),
                'meta_tag/update/success': gettext('Meta tag <strong>%s</strong> updated!'),
                'meta_tag/delete/success': gettext('Meta tag <strong>%s</strong> deleted!')
            }
    };
});