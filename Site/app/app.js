Ext.application({
    name: 'App',

    // Setup the icons and startup screens for phones and tablets.
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    /**
    * The launch method of our application gets called when the application is good to launch.
    * In here, we are going to build the structure of our application and add it into the Viewport.
    */
    launch: function () {
        // The whole app UI lives in this tab panel
        Ext.Viewport.add({
            xtype: 'tabpanel',
            fullscreen: true,
            tabBarPosition: 'bottom',
            //            styleHtmlContent: true,
            
            items: [
                // This is the home page, an intro to the app.
                {
                    title: 'Home',
                    iconCls: 'home',
                    cls: 'home',
                    scrollable: true,
                    html: [
                        '<img height=260 src="http://staging.sencha.com/img/sencha.png" />',
                        '<h1>Welcome to the touch screen PoC</h1>',
                        "<p>This application demonstrates the use of HTML5, CSS3 ",
                        "and Javascript to create touch enabled apps for mobiles, tablets ",
                        "and laptops</p>",
                        '<h2>Created with Sencha Touch (2.0.0)</h2>'
                    ].join("")
                },
                
                // This is the contact page, which features a form and a button. The button submits the form
                {
                    xtype: 'formpanel',
                    title: 'Contact Us',
                    iconCls: 'user',
                    url: 'contact.php',
                    layout: 'vbox',
                    
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Contact Us',
                            instructions: 'Email address is optional',

                            items: [
                                {
                                    xtype: 'textfield',
                                    label: 'Name',
                                    name: 'name'
                                },
                                {
                                    xtype: 'emailfield',
                                    label: 'Email',
                                    name: 'email',
                                    placeHolder: 'you@somewhere.com'
                                },
                                {
                                    xtype: 'textareafield',
                                    label: 'Message',
                                    name: 'message',
                                    height: 90
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Send',
                            ui: 'confirm',

                            // The handler is called when the button is tapped
                            handler: function() {

                                // This looks up the items stack above, getting a reference to the first form it sees
                                var form = this.up('formpanel');

                                // Sends an AJAX request with the form data to the url specified above (contact.php).
                                // The success callback is called if we get a non-error response from the server
                                form.submit({
                                    success: function() {
                                        // The callback function is run when the user taps the 'ok' button
                                        Ext.Msg.alert('Thank You', 'Your message has been received', function() {
                                            form.reset();
                                        });
                                    }
                                });
                            }
                        }
                    ]
                }
            ]
        });
    }

});