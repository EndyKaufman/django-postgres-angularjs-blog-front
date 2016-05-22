app.factory('FileConst', function(gettext) {
    return {
        message: {
            'file/delete/confirm': gettext('Do you really want to delete file <strong>%s</strong>?'),
            'file/create/success': gettext('File <strong>%s</strong> created!'),
            'file/update/success': gettext('File <strong>%s</strong> updated!'),
            'file/delete/success': gettext('File <strong>%s</strong> deleted!')
        }
    };
});