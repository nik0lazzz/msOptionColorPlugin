<?php

class msOptionColorPluginOfficeItemEnableProcessor extends modObjectProcessor
{
    public $objectType = 'msOptionColorPluginItem';
    public $classKey = 'msOptionColorPluginItem';
    public $languageTopics = array('msoptioncolorplugin');
    //public $permission = 'save';


    /**
     * @return array|string
     */
    public function process()
    {
        if (!$this->checkPermissions()) {
            return $this->failure($this->modx->lexicon('access_denied'));
        }

        $ids = $this->modx->fromJSON($this->getProperty('ids'));
        if (empty($ids)) {
            return $this->failure($this->modx->lexicon('msoptioncolorplugin_item_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var msOptionColorPluginItem $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('msoptioncolorplugin_item_err_nf'));
            }

            $object->set('active', true);
            $object->save();
        }

        return $this->success();
    }

}

return 'msOptionColorPluginOfficeItemEnableProcessor';
