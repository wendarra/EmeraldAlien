/**
 * Main controller.
 */
Ext.define('DemoApp.controller.MainController', {
    extend: 'Ext.app.Controller',

    views: ['Viewport', 'HomeView', 'EmployeeListView', 'GridView', 'ContactUsView'],

    config: {
        refs: {
            // Lookup views by id or xtype.
            contactForm: '#contactForm',
            employeeList: 'employeelistview',
            tabPanel: '#viewportview',
            grid: '#employeegridview'
        },

        control: {
            'button[action=submitContact]': {
                tap: 'submitContactForm'
            },
            '#employeeList': {
                disclose: 'onDiscloseEvent'
            }
        }
    },

    submitContactForm: function () {
        var form = this.getContactForm();

        form.submit({
            success: function () {
                // The callback function is run when the user taps the 'ok' button
                Ext.Msg.alert('Thank You', 'Your message has been received', function () {
                    form.reset();
                });
            }
        });

        console.log(form);
    },

    onDiscloseEvent: function (list, record, target, index, event, eOpts) {
        console.log('Disclose event fired.');

        // Update the current employee so that it shows in the grid.
        record.set("showInGrid", true);

        var employeesStore = list.getStore();

        employeesStore.sync();
        employeesStore.sort([{ property: 'lastName', direction: 'ASC'}]);

        this.activateGridView();
    },

    activateGridView: function () {
        console.log('activateGridView');
        this.getTabPanel().setActiveItem(this.getGrid(), { type: 'slide', direction: 'left' });
    }

});