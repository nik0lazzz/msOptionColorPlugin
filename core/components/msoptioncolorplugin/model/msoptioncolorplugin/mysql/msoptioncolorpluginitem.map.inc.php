<?php
$xpdo_meta_map['msOptionColorPluginItem']= array (
  'package' => 'msoptioncolorplugin',
  'version' => '1.1',
  'table' => 'msoptioncolorplugin_items',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'name' => '',
    'color' => '',
  ),
  'fieldMeta' => 
  array (
    'name' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'color' => 
    array (
      'dbtype' => 'text',
      'phptype' => 'text',
      'null' => true,
      'default' => '',
    ),
  ),
);
