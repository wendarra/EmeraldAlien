Ext.application({
    name: 'Sencha',

    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            styleHtmlContent: true,
            html: 'Hello World'
        });
    }

});