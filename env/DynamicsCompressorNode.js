globalMy.DynamicsCompressorNode_get_threshold = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['threshold'];
  if (globalMy.is_log) {
    console.log('[*]  调用了DynamicsCompressorNode_get_threshold,result => ', result);
  }
  return result;
};
globalMy.DynamicsCompressorNode_get_knee = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['knee'];
  if (globalMy.is_log) {
    console.log('[*]  调用了DynamicsCompressorNode_get_knee,result => ', result);
  }
  return result;
};
globalMy.DynamicsCompressorNode_get_ratio = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['ratio'];
  if (globalMy.is_log) {
    console.log('[*]  调用了DynamicsCompressorNode_get_ratio,result => ', result);
  }
  return result;
};
globalMy.DynamicsCompressorNode_get_reduction = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['reduction'];
  if (globalMy.is_log) {
    console.log('[*]  调用了DynamicsCompressorNode_get_reduction,result => ', result);
  }
  return result;
};
globalMy.DynamicsCompressorNode_get_attack = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['attack'];
  if (globalMy.is_log) {
    console.log('[*]  调用了DynamicsCompressorNode_get_attack,result => ', result);
  }
  return result;
};
globalMy.DynamicsCompressorNode_get_release = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['release'];
  if (globalMy.is_log) {
    console.log('[*]  调用了DynamicsCompressorNode_get_release,result => ', result);
  }
  return result;
};