globalMy.AudioNode_get_context = function () {
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['context'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioNode_get_context,result => ', result)
    }
    return result;
}
globalMy.AudioNode_get_numberOfInputs = function () {
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['numberOfInputs'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioNode_get_numberOfInputs,result => ', result)
    }
    return result;
}
globalMy.AudioNode_get_numberOfOutputs = function () {
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['numberOfOutputs'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioNode_get_numberOfOutputs,result => ', result)
    }
    return result;
}
globalMy.AudioNode_get_channelCount = function () {
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['channelCount'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioNode_get_channelCount,result => ', result)
    }
    return result;
}
globalMy.AudioNode_set_channelCount = function (val) {
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['channelCount'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioNode_set_channelCount, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.AudioNode_get_channelCountMode = function () {
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['channelCountMode'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioNode_get_channelCountMode,result => ', result)
    }
    return result;
}
globalMy.AudioNode_set_channelCountMode = function (val) {
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['channelCountMode'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioNode_set_channelCountMode, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.AudioNode_get_channelInterpretation = function () {
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['channelInterpretation'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioNode_get_channelInterpretation,result => ', result)
    }
    return result;
}
globalMy.AudioNode_set_channelInterpretation = function (val) {
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['channelInterpretation'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioNode_set_channelInterpretation, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.AudioNode_connect = function () {
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioNode_connect, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AudioNode_disconnect = function () {
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioNode_disconnect, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}