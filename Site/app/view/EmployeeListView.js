/**
* This is the employee list page which lists the employees from the Employee store.
*/
Ext.define('DemoApp.view.EmployeeListView', {
    extend: 'Ext.List',
    xtype: 'employeelistview',

    config: {
        title: 'Grid',
        iconCls: 'star',
        grouped: true,

        // Set the itemtpl to show the fields from the store.
        itemTpl: '{firstName} {lastName}',
        
        // Bind the store to this list.
        store: 'EmployeesStore',

        // Enable disclosure icons.
        disclosure: true,

        // Set the function for when a user taps on a disclsoure icon.
        onItemDisclosure: function (record) {
            console.log(record);
            Ext.Msg.alert('Item Disclosure!', 'Disclosing ' + record.get('firstName') + ' ' + record.get('lastName'));
        },

        listeners: {
            select: function (view, record) {
                Ext.Msg.alert('Selected!', 'You selected ' + record.get('firstName'));
            }
        }
    }
});