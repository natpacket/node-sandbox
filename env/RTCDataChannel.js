globalMy.RTCDataChannel_get_label = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['label'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_label,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_get_ordered = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['ordered'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_ordered,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_get_maxPacketLifeTime = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['maxPacketLifeTime'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_maxPacketLifeTime,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_get_maxRetransmits = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['maxRetransmits'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_maxRetransmits,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_get_protocol = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['protocol'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_protocol,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_get_negotiated = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['negotiated'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_negotiated,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_get_id = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['id'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_id,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_get_readyState = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['readyState'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_readyState,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_get_bufferedAmount = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['bufferedAmount'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_bufferedAmount,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_get_bufferedAmountLowThreshold = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['bufferedAmountLowThreshold'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_bufferedAmountLowThreshold,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_set_bufferedAmountLowThreshold = function (val) {
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['bufferedAmountLowThreshold'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_set_bufferedAmountLowThreshold, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCDataChannel_get_onopen = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onopen'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_onopen,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_set_onopen = function (val) {
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onopen'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_set_onopen, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCDataChannel_get_onbufferedamountlow = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onbufferedamountlow'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_onbufferedamountlow,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_set_onbufferedamountlow = function (val) {
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onbufferedamountlow'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_set_onbufferedamountlow, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCDataChannel_get_onerror = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onerror'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_onerror,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_set_onerror = function (val) {
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onerror'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_set_onerror, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCDataChannel_get_onclosing = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onclosing'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_onclosing,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_set_onclosing = function (val) {
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onclosing'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_set_onclosing, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCDataChannel_get_onclose = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onclose'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_onclose,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_set_onclose = function (val) {
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onclose'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_set_onclose, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCDataChannel_get_onmessage = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onmessage'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_onmessage,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_set_onmessage = function (val) {
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onmessage'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_set_onmessage, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCDataChannel_get_binaryType = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['binaryType'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_binaryType,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_set_binaryType = function (val) {
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['binaryType'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_set_binaryType, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCDataChannel_get_reliable = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['reliable'];
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_get_reliable,result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_close = function () {
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_close, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCDataChannel_send = function () {
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了RTCDataChannel_send, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};