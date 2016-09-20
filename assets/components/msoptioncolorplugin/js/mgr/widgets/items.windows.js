msOptionColorPlugin.window.CreateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'msoptioncolorplugin-item-window-create';
    }
    Ext.applyIf(config, {
        title: _('msoptioncolorplugin_item_create'),
        width: 550,
        autoHeight: true,
        url: msOptionColorPlugin.config.connector_url,
        action: 'mgr/item/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    msOptionColorPlugin.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(msOptionColorPlugin.window.CreateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        },{
            xtype: 'hidden',
            name: 'color',
            id: config.id + '-color'
        },{
            xtype: 'textfield',
            fieldLabel: _('msoptioncolorplugin_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'colorpalette', fieldLabel: _('color'),
            id: config.id + '-color-palette',
            listeners: {
                select: function (palette, color) {
                    Ext.getCmp(config.id + '-color').setValue(color)
                },
                beforerender: function (palette) {
                    if (config.record['color'] != undefined) {
                        palette.value = config.record['color'];
                    }
                }
            },
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('msoptioncolorplugin-item-window-create', msOptionColorPlugin.window.CreateItem);


msOptionColorPlugin.window.UpdateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'msoptioncolorplugin-item-window-update';
    }
    Ext.applyIf(config, {
        title: _('msoptioncolorplugin_item_update'),
        width: 550,
        autoHeight: true,
        url: msOptionColorPlugin.config.connector_url,
        action: 'mgr/item/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    msOptionColorPlugin.window.UpdateItem.superclass.constructor.call(this, config);
};
Ext.extend(msOptionColorPlugin.window.UpdateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        },{
            xtype: 'hidden',
            name: 'color',
            id: config.id + '-color'
        },{
            xtype: 'textfield',
            fieldLabel: _('msoptioncolorplugin_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'colorpalette', fieldLabel: _('color'),
            id: config.id + '-color-palette',
            listeners: {
                select: function (palette, color) {
                    Ext.getCmp(config.id + '-color').setValue(color)
                },
                beforerender: function (palette) {
                    if (config.record['color'] != undefined) {
                        palette.value = config.record['color'];
                    }
                }
            },
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('msoptioncolorplugin-item-window-update', msOptionColorPlugin.window.UpdateItem);