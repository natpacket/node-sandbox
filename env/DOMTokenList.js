// webgl
globalMy.DOMTokenList_entries = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了DOMTokenList_entries, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.DOMTokenList_keys = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了DOMTokenList_keys, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.DOMTokenList_values = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了DOMTokenList_values, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.DOMTokenList_forEach = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了DOMTokenList_forEach, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.DOMTokenList_get_length = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['length'];
  if (globalMy.is_log) {
    console.log('[*]  调用了DOMTokenList_get_length,result => ', result);
  }
  return result;
};
globalMy.DOMTokenList_get_value = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['value'];
  if (globalMy.is_log) {
    console.log('[*]  调用了DOMTokenList_get_value,result => ', result);
  }
  return result;
};
globalMy.DOMTokenList_set_value = function (val) {
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['value'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了DOMTokenList_set_value, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.DOMTokenList_add = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了DOMTokenList_add, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.DOMTokenList_contains = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了DOMTokenList_contains, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.DOMTokenList_item = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了DOMTokenList_item, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.DOMTokenList_remove = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了DOMTokenList_remove, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.DOMTokenList_replace = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了DOMTokenList_replace, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.DOMTokenList_supports = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了DOMTokenList_supports, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.DOMTokenList_toggle = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了DOMTokenList_toggle, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.DOMTokenList_toString = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了DOMTokenList_toString, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};