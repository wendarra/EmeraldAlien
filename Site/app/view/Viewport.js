/**
* Sets up the fullscreen tab panel.
*/
Ext.define('DemoApp.view.Viewport', {
    extend: 'Ext.TabPanel',
    xtype: 'viewport',
    
    config: {

        fullscreen: true,
        tabBarPosition: 'bottom',

        items: [
			{
			    xtype: 'homeview'
			},
			{
			    xtype: 'employeelistview'
			},
            {
                xtype: 'contactusview'
            }
		]
    }
});
