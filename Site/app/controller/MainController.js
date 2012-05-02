/**
 * Main controller.
 */
Ext.define('DemoApp.controller.MainController', {
    extend: 'Ext.app.Controller',

    views: ['HomeView', 'EmployeeListView', 'GridView', 'ContactUsView'],

    config: {
        refs: {
            contactForm: '#contactForm'
        },

        control: {
            'button[action=submitContact]': {
                tap: 'submitContactForm'
            }
        }
    },

    submitContactForm: function () {
        var form = this.getContactForm();

        form.submit({
            success: function() {
                // The callback function is run when the user taps the 'ok' button
                Ext.Msg.alert('Thank You', 'Your message has been received', function() {
                    form.reset();
                });
            }
        });

        console.log(form);
    }
});