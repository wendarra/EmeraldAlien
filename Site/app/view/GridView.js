/**
* This is the grid page which lists the employees from the Employee store.
*/
var renderCurrency = function (value) {
    var color = (value > 0) ? '009933' : 'FF0000';
    value = parseFloat(value); if (!isNaN(value)) value = value.toFixed(2); else value = '0.00';
    return '<span style="color: #' + color + ';">' + value + '</span>';
}

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
                        style: 'text-align: center;',
                        width: '5%',
                        filter: { type: 'string' },
                        renderer: function (value, values) {
                            return (value != null) ? value : '';
                        }
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
					    style: 'text-align: right; padding-right: 1em;',
					    width: '15%',
					    filter: { type: 'numeric' },
					    renderer: renderCurrency
					},
                    {
                        header: 'Sal Sac',
                        dataIndex: 'salarySacrifice',
                        style: 'text-align: right; padding-right: 1em;',
                        width: '15%',
                        filter: { type: 'numeric' },
                        renderer: renderCurrency
                    },
                    {
                        header: 'Mbr Vol',
                        dataIndex: 'memberVoluntary',
                        style: 'text-align: right; padding-right: 1em;',
                        width: '15%',
                        filter: { type: 'numeric' },
                        renderer: renderCurrency
                    }
				]
    }
});
   