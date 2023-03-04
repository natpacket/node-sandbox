// History
globalMy.NavigatorUAData_get_brands = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['brands'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了NavigatorUAData_get_brands,result => ', '' + result);
  }
  return result;
};
globalMy.NavigatorUAData_get_mobile = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['mobile'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了NavigatorUAData_get_mobile,result => ', '' + result);
  }
  return result;
};
globalMy.NavigatorUAData_get_platform = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['platform'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了NavigatorUAData_get_platform,result => ', '' + result);
  }
  return result;
};
globalMy.NavigatorUAData_getHighEntropyValues = function () {
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了NavigatorUAData_getHighEntropyValues, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.NavigatorUAData_toJSON = function () {
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了NavigatorUAData_toJSON, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};