Ext.application({
    name: 'App',

    launch: function () {
        Ext.create('Ext.tab.Panel', {
            fullscreen: true,
            tabBarPosition: 'bottom',
            styleHtmlContent: true,
            items: [
                {
                    title: 'Home',
                    iconCls: 'home',
                    html: [
                        '<img src="http://staging.sencha.com/img/sencha.png" />',
                        '<h1>Welcome to the touch screen PoC</h1>',
                        "<p>This application demonstrates the use of HTML5, CSS3 ",
                        "and Javascript to create touch enabled apps for mobiles, tablets ",
                        "and laptops</p>",
                        '<h2>Created with Sencha Touch (2.0.0)</h2>'
                    ].join("")
                }
            ]
        });
    }

});