miniShop2.combo.color = function (config) {
    config = config || {};

    Ext.applyIf(config, {
        name: 'color',
        fieldLabel: _('ms2_product_color'),
        hiddenName: 'color',
        displayField: 'name',
        valueField: 'id',
        anchor: '99%',
        fields: ['name', 'id'],
        pageSize: 20,
        url: '/msOptionColorPlugin/assets/components/msoptioncolorplugin/connector.php',
        typeAhead: true,
        editable: true,
        allowBlank: true,
        emptyText: _('no'),
        baseParams: {
            action: 'mgr/item/getlist',
            combo: true,
            id: config.value,
            //limit: 0,
        }
    });
    miniShop2.combo.color.superclass.constructor.call(this, config);
};
Ext.extend(miniShop2.combo.color, MODx.combo.ComboBox);
Ext.reg('minishop2-combo-color', miniShop2.combo.color);


miniShop2.plugin.color = {
    // Изменение полей для панели товара
    getFields: function () {
        return {
            color: {
                xtype: 'minishop2-combo-color',
                description: '<b>[[+color]]</b><br />' + _('ms2_product_color_help')
            }
        }
    },
    // Изменение колонок таблицы товаров в категории
    getColumns: function () {
        return {
            color: {
                width: 50,
                sortable: false,
                editor: {
                    xtype: 'minishop2-combo-autocomplete',
                    name: 'color'
                }
            }
        }
    }
};