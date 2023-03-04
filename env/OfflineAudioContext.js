globalMy.OfflineAudioContext_get_oncomplete = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['oncomplete'];
  if (globalMy.is_log) {
    console.log('[*]  调用了OfflineAudioContext_get_oncomplete,result => ', result);
  }
  return result;
};
globalMy.OfflineAudioContext_set_oncomplete = function (val) {
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['oncomplete'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了OfflineAudioContext_set_oncomplete, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.OfflineAudioContext_get_length = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['length'];
  if (globalMy.is_log) {
    console.log('[*]  调用了OfflineAudioContext_get_length,result => ', result);
  }
  return result;
};
globalMy.OfflineAudioContext_resume = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了OfflineAudioContext_resume, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.OfflineAudioContext_startRendering = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了OfflineAudioContext_startRendering, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.OfflineAudioContext_suspend = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了OfflineAudioContext_suspend, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};