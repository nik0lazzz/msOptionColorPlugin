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
        baseParams: {
            action: 'msoptioncolorplugin/processor',
            method: 'item/create',
        },
        fields: this.getFields(config),
        keys: this.getKeys(config),
    });
    msOptionColorPlugin.window.CreateItem.superclass.constructor.call(this, config);
    this.on('hide', function () {
        var w = this;
        window.setTimeout(function () {
            w.close();
        }, 200);
    });
};
Ext.extend(msOptionColorPlugin.window.CreateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('msoptioncolorplugin_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('msoptioncolorplugin_item_description'),
            name: 'color',
            id: config.id + '-description',
            height: 150,
            anchor: '99%'
        },];
    },

    getKeys: function (config) {
        return [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }];
    },

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
        baseParams: {
            action: 'msoptioncolorplugin/processor',
            method: 'item/update',
        },
        fields: this.getFields(config),
        keys: this.getKeys(config),
    });
    msOptionColorPlugin.window.UpdateItem.superclass.constructor.call(this, config);
    this.on('hide', function () {
        var w = this;
        window.setTimeout(function () {
            w.close();
        }, 200);
    });
};
Ext.extend(msOptionColorPlugin.window.UpdateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('msoptioncolorplugin_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('msoptioncolorplugin_item_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('msoptioncolorplugin_item_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    getKeys: function () {
        return [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }];
    },

});
Ext.reg('msoptioncolorplugin-item-window-update', msOptionColorPlugin.window.UpdateItem);