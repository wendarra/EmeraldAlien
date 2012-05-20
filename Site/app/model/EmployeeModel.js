/**
* This model defines an employee. 
*/
Ext.define('DemoApp.model.EmployeeModel', {
    extend: 'Ext.data.Model',

    config: {
        identifier: 'uuid',
        fields: [
            { name: 'firstName',        type: 'string' },
            { name: 'middleInitial',    type: 'string' },
            { name: 'lastName',         type: 'string' },
            { name: 'empCompulsory',    type: 'float' },
            { name: 'salarySacrifice',  type: 'float' },
            { name: 'memberVoluntary',  type: 'float' },
            { name: 'showInGrid',       type: 'boolean' }
        ]
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
