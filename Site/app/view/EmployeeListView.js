/**
* This is the employee list page which lists the employees from the Employee store.
*/
Ext.define('DemoApp.view.EmployeeListView', {
    extend: 'Ext.List',
    xtype: 'employeelistview',
    id: 'employeeList',

    config: {
        title: 'Emp List',
        iconCls: 'maps',
        grouped: true,

        // Set the itemtpl to show the fields from the store.
        itemTpl: '{firstName} {lastName}',

        // Bind the store to this list.
        store: 'employeesStore',

        // Enable disclosure icons.
        disclosure: true,

        // Set the function for when a user taps on a disclsoure icon.
        onItemDisclosure: function (record) {
            console.log(record);
        },

        listeners: {
            select: function (view, record) {
                Ext.Msg.alert('Selected!', 'You selected ' + record.get('firstName'));
            }
        },

        listeners: {
            show: function (list) {
                var store = list.getStore();
                store.clearFilter();
                store.filter('showInGrid', false);
            }
        }
    }
});