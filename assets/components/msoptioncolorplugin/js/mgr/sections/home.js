msOptionColorPlugin.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'msoptioncolorplugin-panel-home',
            renderTo: 'msoptioncolorplugin-panel-home-div'
        }]
    });
    msOptionColorPlugin.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(msOptionColorPlugin.page.Home, MODx.Component);
Ext.reg('msoptioncolorplugin-page-home', msOptionColorPlugin.page.Home);