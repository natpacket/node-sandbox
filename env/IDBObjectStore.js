globalMy.IDBObjectStore_get_name = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['name'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_get_name,result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_set_name = function (val) {
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['name'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_set_name, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.IDBObjectStore_get_keyPath = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['keyPath'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_get_keyPath,result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_get_indexNames = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['indexNames'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_get_indexNames,result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_get_transaction = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['transaction'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_get_transaction,result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_get_autoIncrement = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['autoIncrement'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_get_autoIncrement,result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_add = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_add, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_clear = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_clear, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_count = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_count, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_createIndex = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_createIndex, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_delete = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_delete, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_deleteIndex = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_deleteIndex, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_get = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_get, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_getAll = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_getAll, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_getAllKeys = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_getAllKeys, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_getKey = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_getKey, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_index = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_index, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_openCursor = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_openCursor, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_openKeyCursor = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_openKeyCursor, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBObjectStore_put = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_put, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
// IDBObjectStore
// IDBObjectStore
globalMy.IDBObjectStore_put = function () {
  let result;
  var name = globalMy.setfoundName({});
  Object.setPrototypeOf(globalMy.element[name], IDBRequest.prototype);
  result = globalMy.element[name];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBObjectStore_put, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};

// DOMTokenList