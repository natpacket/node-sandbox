globalMy.IDBRequest_get_result = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['result'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_get_result,result => ', '' + result);
  }
  return result;
};
globalMy.IDBRequest_get_error = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['error'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_get_error,result => ', '' + result);
  }
  return result;
};
globalMy.IDBRequest_get_source = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['source'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_get_source,result => ', '' + result);
  }
  return result;
};
globalMy.IDBRequest_get_transaction = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['transaction'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_get_transaction,result => ', '' + result);
  }
  return result;
};
globalMy.IDBRequest_get_readyState = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['readyState'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_get_readyState,result => ', '' + result);
  }
  return result;
};
globalMy.IDBRequest_get_onsuccess = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onsuccess'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_get_onsuccess,result => ', '' + result);
  }
  return result;
};
globalMy.IDBRequest_set_onsuccess = function (val) {
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onsuccess'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_set_onsuccess, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.IDBRequest_get_onerror = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onerror'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_get_onerror,result => ', '' + result);
  }
  return result;
};
globalMy.IDBRequest_set_onerror = function (val) {
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onerror'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_set_onerror, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.IDBRequest_get_result = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['result'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_get_result,result => ', result);
  }
  return result;
};
globalMy.IDBRequest_get_error = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['error'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_get_error,result => ', result);
  }
  return result;
};
globalMy.IDBRequest_get_source = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['source'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_get_source,result => ', result);
  }
  return result;
};
globalMy.IDBRequest_get_transaction = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['transaction'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_get_transaction,result => ', result);
  }
  return result;
};
globalMy.IDBRequest_get_readyState = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['readyState'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_get_readyState,result => ', result);
  }
  return result;
};
globalMy.IDBRequest_get_onsuccess = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onsuccess'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_get_onsuccess,result => ', result);
  }
  return result;
};
globalMy.IDBRequest_set_onsuccess = function (val) {
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onsuccess'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_set_onsuccess, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.IDBRequest_get_onerror = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onerror'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_get_onerror,result => ', result);
  }
  return result;
};
globalMy.IDBRequest_set_onerror = function (val) {
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onerror'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_set_onerror, 传参val => ' + val + '  result => ', result);
  }
};