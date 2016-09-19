<?php

/**
 * The home manager controller for msOptionColorPlugin.
 *
 */
class msOptionColorPluginHomeManagerController extends modExtraManagerController
{
    /** @var msOptionColorPlugin $msOptionColorPlugin */
    public $msOptionColorPlugin;


    /**
     *
     */
    public function initialize()
    {
        $path = $this->modx->getOption('msoptioncolorplugin_core_path', null,
                $this->modx->getOption('core_path') . 'components/msoptioncolorplugin/') . 'model/msoptioncolorplugin/';
        $this->msOptionColorPlugin = $this->modx->getService('msoptioncolorplugin', 'msOptionColorPlugin', $path);
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return array('msoptioncolorplugin:default');
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('msoptioncolorplugin');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->msOptionColorPlugin->config['cssUrl'] . 'mgr/main.css');
        $this->addCss($this->msOptionColorPlugin->config['cssUrl'] . 'mgr/bootstrap.buttons.css');
        $this->addJavascript($this->msOptionColorPlugin->config['jsUrl'] . 'mgr/msoptioncolorplugin.js');
        $this->addJavascript($this->msOptionColorPlugin->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->msOptionColorPlugin->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->msOptionColorPlugin->config['jsUrl'] . 'mgr/widgets/items.grid.js');
        $this->addJavascript($this->msOptionColorPlugin->config['jsUrl'] . 'mgr/widgets/items.windows.js');
        $this->addJavascript($this->msOptionColorPlugin->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->msOptionColorPlugin->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        msOptionColorPlugin.config = ' . json_encode($this->msOptionColorPlugin->config) . ';
        msOptionColorPlugin.config.connector_url = "' . $this->msOptionColorPlugin->config['connectorUrl'] . '";
        Ext.onReady(function() {
            MODx.load({ xtype: "msoptioncolorplugin-page-home"});
        });
        </script>
        ');
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        return $this->msOptionColorPlugin->config['templatesPath'] . 'home.tpl';
    }
}