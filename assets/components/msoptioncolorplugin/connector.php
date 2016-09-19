<?php
if (file_exists(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php')) {
    /** @noinspection PhpIncludeInspection */
    require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
}
else {
    require_once dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/config.core.php';
}
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var msOptionColorPlugin $msOptionColorPlugin */
$msOptionColorPlugin = $modx->getService('msoptioncolorplugin', 'msOptionColorPlugin', $modx->getOption('msoptioncolorplugin_core_path', null,
        $modx->getOption('core_path') . 'components/msoptioncolorplugin/') . 'model/msoptioncolorplugin/'
);
$modx->lexicon->load('msoptioncolorplugin:default');

// handle request
$corePath = $modx->getOption('msoptioncolorplugin_core_path', null, $modx->getOption('core_path') . 'components/msoptioncolorplugin/');
$path = $modx->getOption('processorsPath', $msOptionColorPlugin->config, $corePath . 'processors/');
$modx->getRequest();

/** @var modConnectorRequest $request */
$request = $modx->request;
$request->handleRequest(array(
    'processors_path' => $path,
    'location' => '',
));