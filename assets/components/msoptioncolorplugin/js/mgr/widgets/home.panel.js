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
            html: '<h2>' + _('msoptioncolorplugin') + '</h2>',
            cls: '',
            style: {margin: '15px 0'}
        }, {
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: true,
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
