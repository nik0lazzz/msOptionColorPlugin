Ext.onReady(function () {
    msOptionColorPlugin.config.connector_url = OfficeConfig.actionUrl;

    var grid = new msOptionColorPlugin.panel.Home();
    grid.render('office-msoptioncolorplugin-wrapper');

    var preloader = document.getElementById('office-preloader');
    if (preloader) {
        preloader.parentNode.removeChild(preloader);
    }
});