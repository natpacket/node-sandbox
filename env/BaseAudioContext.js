// prototype(无构造函数)的原型方法
globalMy.BaseAudioContext_get_destination = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['destination'];
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_get_destination,result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_get_currentTime = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['currentTime'];
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_get_currentTime,result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_get_sampleRate = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['sampleRate'];
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_get_sampleRate,result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_get_listener = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['listener'];
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_get_listener,result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_get_state = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['state'];
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_get_state,result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_get_onstatechange = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onstatechange'];
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_get_onstatechange,result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_set_onstatechange = function (val) {
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onstatechange'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_set_onstatechange, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.BaseAudioContext_createAnalyser = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createAnalyser, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createBiquadFilter = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createBiquadFilter, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createBuffer = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createBuffer, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createBufferSource = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createBufferSource, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createChannelMerger = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createChannelMerger, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createChannelSplitter = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createChannelSplitter, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createConstantSource = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createConstantSource, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createConvolver = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createConvolver, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createDelay = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createDelay, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createDynamicsCompressor = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createDynamicsCompressor, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createGain = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createGain, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createIIRFilter = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createIIRFilter, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createOscillator = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createOscillator, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createPanner = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createPanner, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createPeriodicWave = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createPeriodicWave, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createScriptProcessor = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createScriptProcessor, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createStereoPanner = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createStereoPanner, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_createWaveShaper = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_createWaveShaper, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_decodeAudioData = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_decodeAudioData, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.BaseAudioContext_get_audioWorklet = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['audioWorklet'];
  if (globalMy.is_log) {
    console.log('[*]  调用了BaseAudioContext_get_audioWorklet,result => ', result);
  }
  return result;
};