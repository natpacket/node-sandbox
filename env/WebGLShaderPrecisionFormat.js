globalMy.WebGLShaderPrecisionFormat_get_rangeMin = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['rangeMin'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebGLShaderPrecisionFormat_get_rangeMin,result => ', '' + result);
  }
  return result;
};
globalMy.WebGLShaderPrecisionFormat_get_rangeMax = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['rangeMax'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebGLShaderPrecisionFormat_get_rangeMax,result => ', '' + result);
  }
  return result;
};
globalMy.WebGLShaderPrecisionFormat_get_precision = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['precision'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebGLShaderPrecisionFormat_get_precision,result => ', '' + result);
  }
  return result;
};