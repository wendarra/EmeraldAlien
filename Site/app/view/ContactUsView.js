/**
* This is the contact page, which features a form and a button. The button submits the form.
*/
Ext.define('DemoApp.view.ContactUsView', {
    extend: 'Ext.form.Panel',
    xtype: 'contactusview',
    id: 'contactForm',

    config: {

        title: 'Contact Us',
        iconCls: 'user',
        url: 'contact.aspx',

        layout: {
            type: 'vbox'
        },

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
                ui: 'confirm',
                text: 'Send',
                action: 'submitContact'
            }
        ]
    }
});