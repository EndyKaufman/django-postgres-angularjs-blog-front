app.factory('ContactConst', function(gettext) {
    return {
        strings: {
            title: gettext('Contact us'),
            description: gettext('Contact us')
        },
        message: {
            'contact/send/success': gettext('Message sent successfully!')
        }
    };
});