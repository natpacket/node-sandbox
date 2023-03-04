globalMy.MimeTypeArray_get_length = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['length'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MimeTypeArray_get_length,result => ', '' + result);
  }
  return result;
};
globalMy.MimeTypeArray_item = function () {
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MimeTypeArray_item, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.MimeTypeArray_namedItem = function () {
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MimeTypeArray_namedItem, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
// MouseEvent