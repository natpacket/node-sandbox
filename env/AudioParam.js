globalMy.AudioParam_get_value = function () {
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['value'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioParam_get_value,result => ', result)
    }
    return result;
}
globalMy.AudioParam_set_value = function (val) {
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['value'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioParam_set_value, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.AudioParam_get_automationRate = function () {
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['automationRate'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioParam_get_automationRate,result => ', result)
    }
    return result;
}
globalMy.AudioParam_set_automationRate = function (val) {
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['automationRate'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioParam_set_automationRate, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.AudioParam_get_defaultValue = function () {
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['defaultValue'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioParam_get_defaultValue,result => ', result)
    }
    return result;
}
globalMy.AudioParam_get_minValue = function () {
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['minValue'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioParam_get_minValue,result => ', result)
    }
    return result;
}
globalMy.AudioParam_get_maxValue = function () {
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['maxValue'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioParam_get_maxValue,result => ', result)
    }
    return result;
}
globalMy.AudioParam_cancelAndHoldAtTime = function () {
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioParam_cancelAndHoldAtTime, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AudioParam_cancelScheduledValues = function () {
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioParam_cancelScheduledValues, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AudioParam_exponentialRampToValueAtTime = function () {
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioParam_exponentialRampToValueAtTime, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AudioParam_linearRampToValueAtTime = function () {
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioParam_linearRampToValueAtTime, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AudioParam_setTargetAtTime = function () {
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioParam_setTargetAtTime, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AudioParam_setValueAtTime = function () {
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioParam_setValueAtTime, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AudioParam_setValueCurveAtTime = function () {
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioParam_setValueCurveAtTime, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}

