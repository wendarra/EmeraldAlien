/**
* This model defines an employee. 
*/
Ext.define('DemoApp.model.EmployeeModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['firstName', 'middleInitial', 'lastName']
    },

    fullName: function() {
        var d = this.data,
        names = [
            d.firstName,
            (!d.middleInitial ? "" : d.middleInitial + "."),
            d.lastName
        ];
        return names.join(" ");
    }
});
