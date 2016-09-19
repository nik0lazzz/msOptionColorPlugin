<?php

class msOptionColorPluginOfficeItemCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'msOptionColorPluginItem';
    public $classKey = 'msOptionColorPluginItem';
    public $languageTopics = array('msoptioncolorplugin');
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('msoptioncolorplugin_item_err_name'));
        } elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
            $this->modx->error->addField('name', $this->modx->lexicon('msoptioncolorplugin_item_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'msOptionColorPluginOfficeItemCreateProcessor';