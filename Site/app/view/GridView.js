/**
* This is the grid page which lists the employees from the Employee store.
*/
Ext.define('DemoApp.view.GridView', {
    extend: 'Ext.ux.touch.grid.View',
    xtype: 'gridview',
    id: 'employeegridview',
    requires: ['Ext.ux.touch.grid.View',
			'Ext.ux.touch.grid.feature.Feature',
			'Ext.ux.touch.grid.feature.Sorter'],

    config: {
        title: 'Grid',
        iconCls: 'star',
        grouped: true,

        store: 'employeesStore',

        listeners: {
            show: function (list) {
                var store = list.getStore();
                store.clearFilter();
                store.filter('showInGrid', true);
            }
        },

        features: [
					{
					    ftype: 'Ext.ux.touch.grid.feature.Sorter',
					    launchFn: 'initialize'
					}
				],
        columns: [
					{
					    header: 'First Name',
					    dataIndex: 'firstName',
					    style: 'padding-left: 1em;',
					    width: '25%',
					    filter: { type: 'string' }
					},
                    {
                        header: 'Initial',
                        dataIndex: 'middleInitial',
                        style: 'padding-left: 1em;',
                        width: '5%',
                        filter: { type: 'string' }
                    },
                    {
                        header: 'Last Name',
                        dataIndex: 'lastName',
                        style: 'padding-left: 1em;',
                        width: '25%',
                        filter: { type: 'string' }
                    },
					{
					    header: 'Emp Comp',
					    dataIndex: 'empCompulsory',
					    style: 'text-align: center;',
					    width: '15%',
					    filter: { type: 'numeric' },
					    renderer: function (value, values) {
					        var color = (value > 0) ? '009933' : 'FF0000';
					        return '<span style="color: #' + color + ';">' + value + '</span>';
					    }
					},
                    {
                        header: 'Sal Sac',
                        dataIndex: 'salarySacrifice',
                        cls: 'centered-cell',
                        width: '15%',
                        filter: { type: 'numeric' },
                        renderer: function (value, values) {
                            var color = (value > 0) ? '009933' : 'FF0000';
                            return '<span style="color: #' + color + ';">' + value + '</span>';
                        }
                    },
                    {
                        header: 'Mbr Vol',
                        dataIndex: 'memberVoluntary',
                        style: 'text-align: center;',
                        width: '15%',
                        filter: { type: 'numeric' },
                        renderer: function (value, values) {
                            var color = (value > 0) ? '009933' : 'FF0000';
                            return '<span style="color: #' + color + ';">' + value + '</span>';
                        }
                    }
				]
    }
});
   