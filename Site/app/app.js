Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux.touch.grid': './lib/Ext.ux.touch.grid'
    }
});

Ext.require([
    'Ext.ux.touch.grid.View',
    'Ext.ux.touch.grid.feature.Feature',
    'Ext.ux.touch.grid.feature.Sorter'
]);

/**
* This simple demo shows the ability of Sencha Touch 2 to produce apps for phones and tablets.
*/

// Define the application.
Ext.application({
    name: 'DemoApp',

    controllers: ['MainController'],
    stores: ['EmployeesStore'],
    models: ['EmployeeModel'],

    // The launch method is called when the browser is ready and the application can launch.
    launch: function () {
        Ext.create('DemoApp.view.Viewport');
    }
});