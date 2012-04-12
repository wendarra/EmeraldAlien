/**
* This is the home page, an intro to the app.
*/
Ext.define('DemoApp.view.HomeView', {
    extend: 'Ext.Panel',
    xtype: 'homeview',

    config: {
        title: 'Home',
        iconCls: 'home',
        cls: 'home',
        scrollable: true,
        fullscreen: true,
        html: [
            '<img height=260 src="http://staging.sencha.com/img/sencha.png" />',
            '<h1>Welcome to the demo touch screen app</h1>',
            "<p>This application demonstrates the use of HTML5, CSS3 ",
            "and Javascript to create touch enabled apps for mobiles, tablets ",
            "and laptops</p>",
            '<h2>Created with Sencha Touch (2.0.0)</h2>'
        ].join("")
    }
});