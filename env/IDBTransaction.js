globalMy.IDBTransaction_get_objectStoreNames = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['objectStoreNames'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_objectStoreNames,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_get_mode = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['mode'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_mode,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_get_durability = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['durability'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_durability,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_get_db = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['db'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_db,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_get_error = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['error'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_error,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_get_onabort = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onabort'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_onabort,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_set_onabort = function (val) {
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onabort'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_set_onabort, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.IDBTransaction_get_oncomplete = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['oncomplete'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_oncomplete,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_set_oncomplete = function (val) {
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['oncomplete'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_set_oncomplete, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.IDBTransaction_get_onerror = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onerror'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_onerror,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_set_onerror = function (val) {
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onerror'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_set_onerror, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.IDBTransaction_abort = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_abort, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_commit = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_commit, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_objectStore = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_objectStore, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
// IDBTransaction
// IDBTransaction
globalMy.IDBTransaction_objectStore = function () {
  let result;
  var name = globalMy.setfoundName({});
  Object.setPrototypeOf(globalMy.element[name], IDBObjectStore.prototype);
  result = globalMy.element[name];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_objectStore, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_get_objectStoreNames = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['objectStoreNames'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_objectStoreNames,result => ', result);
  }
  return result;
};

// IDBObjectStore