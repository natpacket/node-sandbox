globalMy.MimeType_get_type = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['type'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MimeType_get_type,result => ', '' + result);
  }
  return result;
};
globalMy.MimeType_get_suffixes = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['suffixes'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MimeType_get_suffixes,result => ', '' + result);
  }
  return result;
};
globalMy.MimeType_get_description = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['description'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MimeType_get_description,result => ', '' + result);
  }
  return result;
};
globalMy.MimeType_get_enabledPlugin = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['enabledPlugin'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MimeType_get_enabledPlugin,result => ', '' + result);
  }
  return result;
};