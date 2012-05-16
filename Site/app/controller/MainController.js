/**
 * Main controller.
 */
Ext.define('DemoApp.controller.MainController', {
    extend: 'Ext.app.Controller',

    views: ['HomeView', 'EmployeeListView', 'GridView', 'ContactUsView'],

    config: {
        refs: {
            // Lookup views by id.S
            contactForm: '#contactForm',
            employeeList: 'employeelistview',
            grid: 'gridview'
        },

        control: {
            'button[action=submitContact]': {
                tap: 'submitContactForm'
            },
            employeeList: {
                // The commands fired by the employee list.
                editEmployeeCommand: "onEditEmployeeCommand"
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

    onEditEmployeeCommand: function () {
        console.log("onEditEmployeeCommand");

        var employeeList = this.getEmployeeList();
        var currentEmployee = employeeList.getRecord();

        // Update the current employee so that it shows in the grid.
        currentEmployee.set("showInGrid", true);

        var employeesStore = Ext.getStore("EmployeesStore");

        employeesStore.sync();
        employeesStore.sort([{ property: 'lastName', direction: 'ASC'}]);

        this.activateGridView();
    }

});