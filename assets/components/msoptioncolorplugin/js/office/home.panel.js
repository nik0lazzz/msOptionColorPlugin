msOptionColorPlugin.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'msoptioncolorplugin-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: false,
            hideMode: 'offsets',
            items: [{
                title: _('msoptioncolorplugin_items'),
                layout: 'anchor',
                items: [{
                    html: _('msoptioncolorplugin_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'msoptioncolorplugin-grid-items',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    msOptionColorPlugin.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(msOptionColorPlugin.panel.Home, MODx.Panel);
Ext.reg('msoptioncolorplugin-panel-home', msOptionColorPlugin.panel.Home);
