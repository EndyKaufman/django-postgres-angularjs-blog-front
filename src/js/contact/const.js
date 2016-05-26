app.factory('ContactConst', function(gettext) {
    return {
        strings: {
            title: gettext('Contact us'),
            description: gettext('Contact us description'),
            'mail/subject/message_from_contact_form': gettext('Message from contact form')
        },
        message: {
            'contact/send/success': gettext('Message sent successfully!'),
            'contact/send/fail': gettext('Message not sent, try later!')
        }
    };
});