var msOptionColorPlugin = function (config) {
    config = config || {};
    msOptionColorPlugin.superclass.constructor.call(this, config);
};
Ext.extend(msOptionColorPlugin, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('msoptioncolorplugin', msOptionColorPlugin);

msOptionColorPlugin = new msOptionColorPlugin();