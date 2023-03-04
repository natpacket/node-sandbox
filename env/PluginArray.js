globalMy.PluginArray_get_length = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['length'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PluginArray_get_length,result => ', '' + result);
  }
  return result;
};
globalMy.PluginArray_item = function () {
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PluginArray_item, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.PluginArray_namedItem = function () {
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PluginArray_namedItem, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.PluginArray_refresh = function () {
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PluginArray_refresh, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
// PointerEvent